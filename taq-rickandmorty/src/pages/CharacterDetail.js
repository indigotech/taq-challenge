import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCharacterDetail} from "../services/requests"
import Header from "../components/Header/Header";
import Detalhes from "../components/Detalhes/Detalhes";
import {ContainerDiv, ContainerButtons, Button} from "./styled"

function CharacterDetail() {
  const [name, setName] =useState("")
  const [image, setImage] =useState("")
  const [episode, setEpisode] =useState([])
  const params = useParams().id
  const history = useHistory()
  useEffect(() => {
    getCharacterDetail(params, setName, setImage, setEpisode)
  }, []);
    const results={id:params, name:name, image:image}
    return (
      <ContainerDiv>
        <Header/>
        <ContainerButtons>
        <Button onClick={history.goBack}>Voltar</Button>
        </ContainerButtons>
        <Detalhes results={results} episodes={episode} />
      </ContainerDiv>
    );
  }
  
  export default CharacterDetail;