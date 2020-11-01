import React from "react";
import ListCharacters from "./ListCharacters";

import * as S from "./style";

export const MainScreen = () => {
  return (
    <>
      <S.Title>
        The Rick and Morty
      </S.Title>
      <S.MainWrapper>
        <S.ListWrapper>
          <ListCharacters />
        </S.ListWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MainScreen;
