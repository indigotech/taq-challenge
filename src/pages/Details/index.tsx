import React, {useCallback, useEffect, useState} from 'react';

import {FiArrowLeft} from 'react-icons/fi';

import {client} from '../../services/api'
import {
  gql
} from "@apollo/client";

import {ContentPage, CardContainer, ImageDiv,TextDiv, ButtonBack} from './styles'

interface DtoEpisode{
  name: string
}
interface DtoDetailsCharacter {
  image: string,
  name: string,
  status: string,
  episode : DtoEpisode[]
}

const Dashboard: React.FC = () => {
  const [info, setInfo] = useState<DtoDetailsCharacter>();
  const [isLoading, setisLoading] = useState<boolean>(true);

  const LoadDataCharacter = useCallback( async() => {
    try {
      let [ , id] = window.location.pathname.split(":");

      const response= await client.query({
        query: gql`
          query {
            character(id: ${id}) {
              name
              status
              image
              episode {
                name
              }
            }
          }
        `
      })
      // debugger;
      setInfo(response.data.character)
      setisLoading(false);
      
    } catch (error) {
      console.error(error)
    }
    }, [])
    

  useEffect(() => {
    LoadDataCharacter()
  }, [LoadDataCharacter])

  useEffect(() => {
  }, [isLoading])
  return (
    <ContentPage>
      {
        !isLoading &&
        <CardContainer>
          <ImageDiv>
            <img src={info?.image} alt = "img"/>
          </ImageDiv>
          <TextDiv>
            <h1>{info?.name}</h1>
            <h2>Episodes</h2>
            <ul>
              {
                !isLoading && info?.episode.map((elem: DtoEpisode, index) => (
                  <li key = {index}>{elem.name}</li>
                ))
              }
            </ul>
          </TextDiv>
          <ButtonBack><FiArrowLeft size= {35}/></ButtonBack>
          
        </CardContainer>
      }
      
    </ContentPage>
  );
};

export default Dashboard;
