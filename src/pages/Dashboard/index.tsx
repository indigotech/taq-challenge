import React, { useState , useEffect, useCallback } from 'react';

import {
  gql
} from "@apollo/client";

import {client} from '../../services/api' 
import Card from '../../components/Card';
import {ContainerCards, DashboardPage} from './styles';
import {ClipLoader} from "react-spinners";

export interface DtoCaracter {
  id: string,
  image: string,
  name: string,
  status: string
}

const Dashboard: React.FC =  () => {
  const [Data , setData] = useState<DtoCaracter[]>([]);
  const [isLoading , setisLoading] = useState<boolean>(true);

  const LoadData = useCallback( async() => {
    try {
      const response= await client.query({
        query: gql`
          query{
            characters {
              results {
                id
                name
                status
                image
              }
            }
          }
        `
      })

      setData([...response.data.characters.results]);
      setisLoading(false)
      
    } catch (error) {
      alert("Ocurred an error: cannot get all characters")
      console.error(error)
    }
  }
  ,[]);
  
  useEffect(() => {
    LoadData()
  }, [LoadData])
  

  function HandleClickCard(event : any){

    const find_character = Data.find(elem => elem.id === event.id)

    if(find_character){
      localStorage.setItem("AppRickMorty", JSON.stringify(find_character))
      window.location.pathname = `/details/:${event.id}`
    }
  }


  useEffect(() => {
  }, [isLoading])
  return (
    <DashboardPage>
    <ClipLoader key = "loader" color={"#ffffff"} loading={isLoading}  size={120} />
    
    { !isLoading && <ContainerCards>
      { 
        !isLoading && Data.map((elem: DtoCaracter) => (
            <Card key= {elem.id} id = {elem.id}  info = {elem} onClick = {(e) => HandleClickCard(e.currentTarget)} />
          ))  
      }

    </ContainerCards>
    }
    </DashboardPage>
  );
};

export default Dashboard;
