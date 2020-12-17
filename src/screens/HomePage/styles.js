import styled from "styled-components"

export const Container = styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap: wrap;
  width:100vw;    
  max-height:100%;    
  background-color: #22222A;
  `

export const Cards = styled.main`
  border-radius:7px;
  display:flex;
  margin: 20px;
  width: 400px;
  height: 200px;
  background-color: #37363C;
  color: white;
  cursor: pointer;
  &:hover{
    background: #43C53C;
    color: black;
    box-shadow: 5px 3px 4px  #1F1E20;
    transition: all .2s ease-in-out
  }
`
export const TextContainer = styled.article`
  display:flex;
  justify-content:center;
  flex-direction:column;
  max-width:100%;
  padding: 10px;
  font-family:Arial, Helvetica, sans-serif;
` 

export const Img = styled.img`
  max-width:50%;
  margin: 5px;
  border-radius: 3px;
` 
