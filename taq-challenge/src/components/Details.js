import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import toast from "react-hot-toast";

import { FiChevronLeft } from 'react-icons/fi';
import { DetailsContainer, HeadContainer, HeadContent, Status, EpContainer } from "../styles/Details-style";
import { BackContainer } from "../styles/BackButton-style";
import Preloader from "../components/Preloader";


function Details(props){
  // states to put character details, and to show load component, respectively
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Setting the client for graphql requests
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  // useEffect just to force initialize query only when the page first load
  useEffect(() => {
    character();
  });

  // Query for get character details, setting the id by props
  const character = async () => {
    client.query({
      query: gql`
        query {
          character(id: ${props.id}) {
            name
            status
            image
            episode {
              name
            }
          }
        }
      `
    }).then(response => {
      // setting the response on characters state
      setDetails(response.data.character);

      // turn off the loader because the query returned all characters
      setIsLoading(false)
    }).catch(error => {
      console.error(error)

      // turn off the loader because the query returned error
      setIsLoading(false)

      // using toast to show user that an error occured
      toast.error('Cannot get character details, try again later!')
    });
  }

  // handle for render the home page on onClick action
  const handleClick = (e) => {
    props.changeScreen('home')
  };

  return(
    // verifying if the page is in loading
    // used a ternary if to show the right color for character status
    isLoading ? <Preloader /> : (
      <DetailsContainer>
        <BackContainer onClick={handleClick}>
          <FiChevronLeft size={20}/>Back
        </BackContainer>
        {details &&
          <span>
            <HeadContainer>
              <img alt={details.name} src={details.image} />
              <HeadContent>
                <h1>{details.name}</h1>
                {details.status === 'Alive' ?
                  <Status primary>{details.status}</Status>
                  : (details.status === 'Dead' ? <Status secondary>{details.status}</Status> : <Status>{details.status}</Status>)
                }
              </HeadContent>
            </HeadContainer>
            <h2>Episodes</h2>
            {details.episode.map((ep, index) => (
              <EpContainer>
                <p key={index}>{ep.name}</p>
              </EpContainer>
            ))}
          </span>

        }
      </DetailsContainer>
    )
  );
}

export default Details;