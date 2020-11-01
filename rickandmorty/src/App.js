import React from "react";
import ListCharacters from "./components/ListCharacters";

import * as S from "./components/style";
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <S.Title>
        The Rick and Morty
      </S.Title>
      <S.MainWrapper>
        <S.ListWrapper>
          <ListCharacters />
        </S.ListWrapper>
        <GlobalStyles />
      </S.MainWrapper>
    </>
  );
};

export default App;
