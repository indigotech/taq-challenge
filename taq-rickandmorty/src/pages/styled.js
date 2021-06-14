import styled from "styled-components"

export const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
flex-grow: 1;
box-sizing: border-box;
h2{
    margin: 1rem;
    text-align: center;
}
iframe {
    align-self: center;
}
`
export const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
padding-top: 16px;
height: 60px;
`

export const Button = styled.button`
  color: rgb(0, 97, 116);
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgb(0, 97, 116);
  border-radius: 3px;
  display: inline-block;
  height: 1.5em;
  box-sizing: content-box;
  :hover{   
    background-color: azure;
  }
`;
