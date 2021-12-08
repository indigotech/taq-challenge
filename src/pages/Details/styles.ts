import styled from 'styled-components'

import img from '../../assets/space2.jpeg'
export const ContentPage = styled.div `
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    background-image: url(${img});
    background-repeat: repeat-y;
    
    

    @media screen and (max-width: 768px) {
        &{
            width: 100%;
            height: 100%;
            /* overflow-x: hidden !important;
            overflow-y: hidden !important; */
            background-repeat: repeat-y;
        }
    }
`;

export const CardContainer = styled.div `
    background: #333;
    width: 50%;
    height: auto;
    margin: 5% auto 0 auto;
    /* display: flex; */

    border-radius: 9px;
    justify-content: center;
    background-color: #C0C0C0;

    @media screen and (max-width: 768px) {
        &{
            width: 80%;  
            height: 100%;      
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
        img{
            display: flex;
            justify-content: center;
            margin: auto auto;
            padding: 5px;
            width: 80%;
            height: 80%;
        }
    }
`

export const TextDiv = styled.div `
    padding: 5px;
    margin: 7px 4px;
    justify-content: center;
    text-align: center;
    color: black;
    
    li{
        text-align: left;
        list-style-type: none;
        margin-top: 3px;
        padding: 1px;        
        /* border: 1px solid black; */
        transition: 0.3s;

        &:hover{
            transform: translateX(10px);
            color: white;
            /* cursor: pointer; */
        }
    }
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