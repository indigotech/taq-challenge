import React, {useCallback, useEffect, useState} from 'react';
import { DtoCaracter } from '../Dashboard';
import {FiArrowLeft} from 'react-icons/fi'

import {ContentPage, CardContainer, ImageDiv,TextDiv, ButtonBack} from './styles'



const Dashboard: React.FC = () => {
  const [info, setInfo] = useState<DtoCaracter>();
  const [isLoading, setisLoading] = useState<boolean>(true);

  const LoadDataCharacter = useCallback(() => {
      const datas = localStorage.getItem("AppRickMorty");
      
      if(datas){
        const info : DtoCaracter = JSON.parse(datas);
        
        setInfo(info)
        setisLoading(false);
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
            <h2>{info?.status}</h2>
          </TextDiv>
          <ButtonBack><FiArrowLeft size= {35}/></ButtonBack>
          
        </CardContainer>
      }
      
    </ContentPage>
  );
};

export default Dashboard;
