import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
export const AppDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
`

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Arial', sans-serif;
}
html, #root {
    max-width: 100vw;
    min-height: 100vh;
}
body {
    width: 100%;
    height: 100%;
}
`