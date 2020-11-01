import React from "react";
import { gql, useQuery } from "@apollo/client";
import { CardCharacter } from "./CardCharacter";

import * as S from "./style";

const CHARACTERS = gql`
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
`;

export const ListCharacters = () => {
  const { loading, error, data } = useQuery(CHARACTERS);

  if (loading)
    return (
        <S.TitleCard>Loading...</S.TitleCard>
    );

  if (error)
    return (
      <>
        <S.StyledLink to={`./`}>
          <S.HomePage />
        </S.StyledLink>
        <S.MainWrapper>
          <S.TitleCard>Error: {error.message}</S.TitleCard>
        </S.MainWrapper>
      </>
    );

  return data.characters.results.map((character) => (
    <S.ListWrapper key={character.id}>
      <CardCharacter key={character.id} {...character} />
    </S.ListWrapper>
  ));
};

export default ListCharacters;
