import React from "react"
import { useHistory} from "react-router-dom";

import {ContainerCardDiv, CardDiv } from "./styled"
import {goToPage} from "../../routes/coordinator"

const Card = (props) => {
  const history=useHistory()
  const results = props.results
    return(
        <ContainerCardDiv>
        {results && results.map((res=>{
            const {id, name, status, image} = res;
            return(
                <CardDiv key={id} onClick={()=>goToPage(history,`/character/${id}`)} >
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>Status: {status}</p>
                </CardDiv>
            )
        }))}
        </ContainerCardDiv>
    )
    }
    export default  Card