import React from "react";
import { gql, useQuery } from "@apollo/client";
import { CardCharacter } from "./CardCharacter";

const CHARACTERS = gql`
  query {
    characters(page: 2) {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

export const ListCharacters = () => {
  const { loading, error, data } = useQuery(CHARACTERS);
  
  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error: {error.message}</p>;

  return data.characters.results.map( character => (

      <CardCharacter key={character.id} { ...character } />

  ));
};

export default ListCharacters;
