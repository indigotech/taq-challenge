import React, {useCallback, useEffect, useState} from 'react';

import {FiArrowLeft} from 'react-icons/fi';

import {client} from '../../services/api'
import {
  gql
} from "@apollo/client";

import {ContentPage, CardContainer, ImageDiv,TextDiv, ButtonBack} from './styles'
import {PaginatedList} from 'react-paginated-list'
import {ClipLoader} from "react-spinners";

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

      setInfo(response.data.character)
      setisLoading(false);
      
    } catch (error) {
      alert("Ocurred an error: cannot get information this character")
      console.error(error)
    }
    }, [])
    

  useEffect(() => {
    LoadDataCharacter()
  }, [LoadDataCharacter])

  useEffect(() => {
  }, [isLoading])

  function HandleClickBack() {
    window.history.back();
  }


  return (
    <ContentPage>
    <ClipLoader color={"#ffffff"} loading={isLoading}  size={150} />
      {
        !isLoading &&
        <CardContainer>
          <ImageDiv>
            <img src={info?.image} alt = "img"/>
          </ImageDiv>
          <TextDiv>
            <h1>{info?.name}</h1>
            <h2>Episodes</h2>           

        <PaginatedList
            list={info!.episode}
            itemsPerPage={3}
            renderList={(list) => (
              <>
                {list.map((item, id) => {
                  return (
                    <div className = "episodes" key={id}>
                      {item.name}
                    </div>
                  );
                })}
              </>
            )}
          />
          </TextDiv>
          <ButtonBack onClick = {HandleClickBack}><FiArrowLeft size= {35}/></ButtonBack>
          
        </CardContainer>
      }
      
    </ContentPage>
  );
};

export default Dashboard;
