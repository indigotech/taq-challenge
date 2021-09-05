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
  // states to put characters, to set the right template, to get the selected character and to show load component, respectively 
  const [characters, setCharacters] = useState([]);
  const [screen, setScreen] = useState('home');
  const [selected, setSelected] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Setting the client for graphql requests
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  // Query for get all characters
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
      // settind the response on characters state
      setCharacters([...response.data.characters.results]);

      // turn off the loader because the query returned all characters
      setIsLoading(false)
    }).catch(error => {
      console.error(error)

      // using toast to show user that an error occured
      toast.error('Cannot get all characters, try again later!')

      // turn off the loader because the query returned error
      setIsLoading(false)
    });
  }

  // useEffect just to force initialize query only when the page first load
  useEffect(() => {
    allCharacters();
  });

  // handle for get the id of the selected character on  onClick action
  const handleDetails = (e) => {
    setSelected(e.id)

    // render the character details page
    setScreen('details')
  };

  return(
    // verifying if the page is in loading
    // used a ternary if to show the right color for character status
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