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
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  useEffect(() => {
    character();
  });

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
      setDetails(response.data.character);
      setIsLoading(false)
    }).catch(error => {
      console.error(error)
      setIsLoading(false)
      toast.error('Cannot get character details, try again later!')
    });
  }

  const handleClick = (e) => {
    props.changeScreen('home')
  };

  return(
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