import styled from 'styled-components'


export const ContentPage = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto auto;

    @media screen and (max-width: 768px) {
        &{
            width: 100%;
            height: 100vh;
            background-repeat: repeat-y;
        }
    }
`;

export const CardContainer = styled.div `
    width: 30%;
    height: 30%;
    margin: 5% auto 0 auto;
    border-radius: 9px;
    justify-content: center;
    background-color:rgba(192, 192, 192, 0.7);


    @media screen and (max-width: 768px) {
        &{
            width: 80%;  
            height: 78%;      
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

    .episodes {
        font-size: 17px;
    }

    h2{
        margin: 4px 0;
    }
    
    li{

        padding: 3px;      
        width: 40px;
        text-align: center;
        background-color: #63eb78;
        /* border: 1px solid black; */
        transition: 0.3s;

        &:hover{
            /* transform: translateX(10px); */
            /* color: white; */
            /* cursor: pointer; */
            opacity: 0.5;
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