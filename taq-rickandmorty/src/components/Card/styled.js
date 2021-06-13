import styled from "styled-components"

export const CardDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 1rem;
cursor: pointer;
width: 200px;
height: 300px;
img{
    object-fit: cover;
}
h3{
    margin-top: 8px;
}
`
export const ContainerCardDiv = styled.div`
display: flex;
align-self: center;
flex-wrap: wrap;
justify-content: center;
background-color: aliceblue;
max-width: 1200px;
padding-left: 1rem;
margin: 0 8rem;
margin-top: 1rem;
`