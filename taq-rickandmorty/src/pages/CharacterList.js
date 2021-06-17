import React, {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom";
import { getCharacterList} from "../services/requests"
import { goToPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import {ContainerDiv, ContainerButtons, Button} from "./styled"
import {useRequestData} from "../hooks/useRequestData/useRequestData"

function CharacterList() {
    const history=useHistory();
    const params = useParams().page;

  const query = {
    query: `query {
        characters(page:${!params  ? 1 : params}){
          info{
          next 
          prev
          }
          results{
            id
            name
            status
            image
          } 
        }
          }`,
        }
        const {data , error} = useRequestData( query)
        if(error){
         goToPage( history,"/error")
        }


    return (
      <ContainerDiv>
        <Header />
        <ContainerButtons>

        {data && data.characters && data.characters.info && data.characters.info.prev &&<Button onClick={()=>goToPage(history,`/page/${data.characters.info.prev}`)} >Página Anterior</Button>}
        {data && data.characters && data.characters.info &&  data.characters.info.next &&<Button onClick={()=>goToPage(history,`/page/${data.characters.info.next}`)}>Próxima Página</Button>}
        </ContainerButtons>
        {data && data.characters&& data.characters.results && data.characters.results.length>0 && <Card results={data.characters.results} />}
        {data && data.characters&& data.characters.results && !data.characters.results.length>0 && <div><h2>Loading</h2></div>}
      </ContainerDiv>
    );
  }
  
  export default CharacterList;