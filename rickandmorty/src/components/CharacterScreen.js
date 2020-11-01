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

    if (loading) return (
        <S.MainWrapper>
            <S.TitleCard>Loading...</S.TitleCard>
        </S.MainWrapper>
    )

    if (error) return (
        <S.MainWrapper>
            <S.TitleCard>Error: {error.message}</S.TitleCard>
        </S.MainWrapper>
    )

    return (
        <>
            <S.StyledLink to={ `./` }>
                <S.HomePage />
            </S.StyledLink>
            <S.Title>{data.character.name}</S.Title>
            <S.MainWrapper>
                <S.ImgWrapper src={data.character.image} alt={data.character.name} />
                {
                    data.character.episode.map( ({name}) => (
                        <S.EpisodeInformation>
                            {name}
                        </S.EpisodeInformation>
                    ))
                }
            </S.MainWrapper>
        </>
        )
}