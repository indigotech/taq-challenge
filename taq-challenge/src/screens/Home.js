import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import toast from "react-hot-toast";

import styled, { css } from 'styled-components'

function Home(){
  const [characters, setCharacters] = useState([]);

  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  useEffect(() => {
    allCharacters();
  }, []);

  const allCharacters = async () => {
    client.query({
      query: gql`
        query {
          characters {
            results {
              id
              name
              status
              image
            }
          }
        }
      `
    }).then(response => {
      setCharacters([...response.data.characters.results]);
    }).catch(error => {
      console.error(error)
      toast.error('Cannot get all characters, try again later!')
    });
  }

  const Card = styled.div`
    background: white;
    width: 350px;
    border-radius: 15px;
    cursor: pointer;
    margin: 1em;
    border: none;
    padding: 1em;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    box-shadow: 0px -1px 9px -1px rgba(105,105,105,0.74);
    -webkit-box-shadow: 0px -1px 9px -1px rgba(105,105,105,0.74);
    -moz-box-shadow: 0px -1px 9px -1px rgba(105,105,105,0.74);

    &:hover{
      box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
      -webkit-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
      -moz-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
    }

    ${props => props.primary && css`
      background: palevioletred;
      color: white;
    `}
  `;

  const Image = styled.img`
    grid-area: 1 / 1 / 2 / 2;
    width: 100px;
    border-radius: 50%;
    padding: 1em
  `;

  const Content = styled.div`
    grid-area: 1 / 2 / 2 / 3;
  `;

  const Container = styled.div`
    display: inline-flex;
    padding: 2em;
    flex-flow: wrap;
    padding: 2em;
  `

  return(
    <Container>
      {characters && characters.map((character, index) => (
        <Card>
          <Image alt={character.name} src={character.image} />
          <Content>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
          </Content>
        </Card>
      ))}
    </Container>
  );
}

export default Home;