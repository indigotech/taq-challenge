import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import toast from "react-hot-toast";

import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 2em;
  flex-flow: wrap;
  padding: 2em;
`;

function Details(props){
  const [details, setDetails] = useState();

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
    }).catch(error => {
      console.error(error)
      toast.error('Cannot get character details, try again later!')
    });
  }

  const handleClick = (e) => {
    props.changeScreen('home')
  };

  return(
    <DetailsContainer>
      <button onClick={handleClick}>Back</button>
      {details &&
        <span>
          <img alt={details.name} src={details.image} />
          <h1>{details.name}</h1>
          <p>{details.status}</p>
          <h2>Episodes</h2>
          {details.episode.map((ep, index) => (
            <p key={index}>{ep.name}</p>
          ))}
        </span>

      }
    </DetailsContainer>
  );
}

export default Details;