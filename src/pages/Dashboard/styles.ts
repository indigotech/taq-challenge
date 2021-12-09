import styled from "styled-components";

export const DashboardPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
`

export const ContainerCards = styled.div`
    max-width: 1400px;

    height: 100%;
    margin: auto auto;
    padding: 15px 8px;

    display: inline-flex;
    justify-content: center;
    flex-flow: wrap;


    @media screen and (max-width: 768px) {
        &{
            width: 100%;
            background-repeat: repeat-y;
        }
    }

`;