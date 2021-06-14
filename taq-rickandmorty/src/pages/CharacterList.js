import React, {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom";
import { getCharacterList} from "../services/requests"
import { goToPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import {ContainerDiv, ContainerButtons, Button} from "./styled"

function CharacterList() {
    const history=useHistory();
    const params = useParams().page;
    const [info, setInfo] = useState([])
    const [results, setResults] = useState([])
    useEffect(() => {
        getCharacterList(params, setInfo, setResults, history)
      }, []);
      useEffect(() => {
        getCharacterList(params, setInfo, setResults, history)
      }, [params]);
    return (
      <ContainerDiv>
        <Header />
        <ContainerButtons>
        {info && info.prev && <Button onClick={()=>goToPage(history,`/page/${info.prev}`)} >Página Anterior</Button>}
        {info && info.next && <Button onClick={()=>goToPage(history,`/page/${info.next}`)}>Próxima Página</Button>}
        </ContainerButtons>
        {results.length>0 && <Card results={results} />}
        {!results.length>0 && <div><h2>Loading</h2></div>}
      </ContainerDiv>
    );
  }
  
  export default CharacterList;