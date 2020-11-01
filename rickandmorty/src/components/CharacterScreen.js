import React from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from "@apollo/client";


import * as S from "./style"

export const CharacterScreen = () => {
    
    const { characterId } = useParams();  //funcion propia de react para tomar datos de la url
    
    const CHARACTER = gql`
    query{
        character(id:${characterId}){
            name
            image
            episode{
                name
            }
        } 
    }
    `;

    const { loading, error, data } = useQuery(CHARACTER);

    if (loading) return <S.TitleCard>Loading...</S.TitleCard>;

    if (error) return <S.TitleCard>Error: {error.message}</S.TitleCard>;

    return (
        <>
            <S.Title>{data.character.name}</S.Title>
            <S.MainWrapper>
                <S.ImgWrapper src={data.character.image} alt={data.character.name} />
            </S.MainWrapper>
        </>
        )
}