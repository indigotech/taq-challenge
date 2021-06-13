import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCharacterDetail} from "../services/requests"
import { goToPage } from "../routes/coordinator";
import {ContainerDiv, ContainerButtons} from "./styled"


import Header from "../components/Header/Header";
function CharacterDetail() {
    return (
      <ContainerDiv>
        <Header/>
      </ContainerDiv>
    );
  }
  
  export default CharacterDetail;