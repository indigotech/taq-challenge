import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-items: center;
justify-content:center;
align-items: center;
  width:100vw;    
  height:100vh;    
  background-color: #22222A;
  `

export const Cards = styled.main`
border-radius:7px;
display:flex;
align-items:center;
justify-content:space-around;
margin: 30px ;
  width: 700px;
  height: auto;
  background-color: #37363C;
  color: white; 
  line-height: 1.5;
`
export const TextContainer = styled.article`
display:flex;
justify-content:space-between;
flex-direction:column;
max-width:100%;
padding: 20px;
margin-bottom: 20px;
overflow: auto;
font-family:Arial, Helvetica, sans-serif;
`

export const Img = styled.img`
max-width:50%;
max-height:300px;
margin: 5px;
border-radius: 3px;
`
export const Button = styled.img`
width:50px;
height:50px;
border-radius: 80px;
background-color:#35c9dd;
border:none;
cursor: pointer;
  &:hover{
    background: #43C53C;
    color: black;
    box-shadow: 5px 3px 4px  #1F1E20;
    transition: all .2s ease-in-out
  }
` 
