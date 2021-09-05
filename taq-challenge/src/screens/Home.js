import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import toast from "react-hot-toast";

import Details from "../components/Details";
import Navbar from '../components/header/Header';
import Preloader from "../components/Preloader";
import { Card, Image, Container, Content } from "../styles/Home-style";
import { Status } from "../styles/Details-style";

function Home(){
  const [characters, setCharacters] = useState([]);
  const [screen, setScreen] = useState('home');
  const [selected, setSelected] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

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
      setIsLoading(false)
    }).catch(error => {
      console.error(error)
      toast.error('Cannot get all characters, try again later!')
      setIsLoading(false)
    });
  }

  useEffect(() => {
    allCharacters();
  });

  const handleDetails = (e) => {
    setSelected(e.id)
    setScreen('details')
  };

  return(
    isLoading ? <Preloader /> : (
      <span>
        <Navbar />
        <Container>
          {screen === 'home' &&
            characters && characters.map((character, index) => (
              <Card key={index} onClick={() => handleDetails(character)}>
                <Image alt={character.name} src={character.image} />
                <Content>
                  <h2>{character.name}</h2>
                  {character.status === 'Alive' ?
                  <Status primary>{character.status}</Status>
                  : (character.status === 'Dead' ? <Status secondary>{character.status}</Status> : <Status>{character.status}</Status>)
                }
                </Content>
              </Card>
            ))
          }
        </Container>
        {screen === 'details' &&
          <Details id={selected} changeScreen={setScreen}/>
        }
      </span>
    )
  );
}

export default Home;