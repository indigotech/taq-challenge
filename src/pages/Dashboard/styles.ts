import styled from "styled-components";
import img2 from '../../assets/space3.jpeg'

export const ContainerCards = styled.div`
    max-width: 1400px;

    height: auto;
    margin: 0 auto;
    padding: 36px 16px;
    border: 1px solid greenyellow;

    display: inline-flex;
    justify-content: center;
    padding: 2em;
    flex-flow: wrap;
    padding: 2em;

    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size : cover;

    /* @media screen and (max-width: 860px) {
        &{
            width: 100%;
            display: block;
            margin-bottom: 20px;
            height: auto;
        }
    } */

`;