import React from "react"
import { useHistory} from "react-router-dom";

import {ContainerDetalhesDiv, CardDiv } from "./styled"
import {goToPage} from "../../routes/coordinator"

const Detalhes = (props) => {
  const history=useHistory()
  const {image, name} = props.results
    return(
        <ContainerDetalhesDiv>
        {props.results && 
            <CardDiv >
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </CardDiv>}
            {props.episodes && 
            <div>
                <h2>Episodes</h2>
            <ul>
        
            {props.episodes.map((list=>{
                return(
                    <li key={list.name}>{list.name}</li>
                )
            }))
        }  
        </ul>   
        </div>}
        </ContainerDetalhesDiv>
    )
    }
    export default  Detalhes