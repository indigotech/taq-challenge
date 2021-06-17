import React from "react"
import { useHistory} from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import {ContainerDiv, ContainerButtons, Button} from "./styled"

function ErrorPage() {
    const history=useHistory();
 
    return (
      <ContainerDiv>
        <Header />
            <h2>Erro!</h2>
        <iframe src="https://giphy.com/embed/afqT2ykIlYcVi" width="480" height="475" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

        <ContainerButtons>
        <Button onClick={()=>goToPage(history,"/")} >Voltar para a Home</Button>
        </ContainerButtons>
      </ContainerDiv>
    );
  }
  export default ErrorPage;