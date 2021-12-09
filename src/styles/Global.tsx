import { createGlobalStyle } from 'styled-components';
import img2 from '../assets/space3.jpeg'


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #312E38;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        background-image: url(${img2});
        background-repeat: no-repeat;
        background-size : cover;

    }

    body , input , button {
        /* Uso roboto, se não encontrar, use Serif */
        font-family: "Roboto Slab", serif;
        font-size: 16px;
    }

    h1,h2,h3,h4, h5, h6, strong {
        font-weight: 500;
    }
    button {
        cursor: pointer;
    }
`;
