import logo from "../../../assets/logo.png";
import styled from "styled-components"

const HeaderContainer = styled.header`
    display:flex;
    justify-content:center;
    width: 100%;
    padding: 10px 0 20px; 
    background-color:black;
`
const Logo = styled.img`
    display:flex;
    justify-content:center;
    max-width:300px;    
  `

export default function Header() {
    return (
        <HeaderContainer>
            <Logo src={logo} alt={"logo Rick and Morty"} />
        </HeaderContainer>
    )
}
