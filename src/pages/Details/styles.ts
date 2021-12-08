import styled from 'styled-components'

import img from '../../assets/space2.jpeg'
export const ContentPage = styled.div `
    width: 100%;
    height: 100vh;
    justify-content: center;
    display: flex;
    background-image: url(${img});
    background-repeat: no-repeat;
    

    @media screen and (max-width: 768px) {
        &{
            width: 100%;
            height: 80vh;
            overflow-x: hidden !important;
            overflow-y: hidden !important;
        }
    }
`;

export const CardContainer = styled.div `
    background: #333;
    width: 400px;
    height: 70%;
    margin: 5% auto 0 auto;

    border-radius: 9px;
    justify-content: center;
    background-color: #C0C0C0;

    @media screen and (max-width: 768px) {
        &{
            width: 210px;
            height: 50%;            
            margin-left: 7px;
            padding: 1em;
            justify-content: center;

        }
    }
`;

export const ImageDiv = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 7px;
    padding: 5px;

    img{
        border-radius: 20px;
    }

    @media screen and (max-width: 768px) {
        &{
            display: flex;
            justify-content: center;
            margin: auto auto;
            padding: 5px;
            width: 30%;
            height: 30%;
        }
    }
`

export const TextDiv = styled.div `
    padding: 5px;
    margin: 7px 4px;
    justify-content: center;
    text-align: center;
    color: black;
`


export const ButtonBack = styled.button `
    display: flex;
    padding: 5px;
    justify-content: center;
    text-align: center;
    border-top: 1px solid gray;
    border-radius: 6px;
    flex: 1;
    width: 20%;    

    margin: auto auto;

    transition-duration: 0.4s;

    &:hover{
        background-color: #4CAF50;
        color: white;
    }

`