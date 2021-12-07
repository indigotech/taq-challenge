import React, { useState , useEffect } from 'react';

import {
  gql
} from "@apollo/client";

import {client} from '../../services/api' 
import Card from '../../components/Card';
import {ContainerCards} from './styles'

export interface DtoCaracter {
  id: string,
  image: string,
  name: string,
  status: string
}

const Dashboard: React.FC =  () => {
  const [Data , setData] = useState<DtoCaracter[]>([]);
  const [isLoadig , setisLoadig] = useState<boolean>(true);


  // Query for get all characters
  const LoadData = async () => {
    try {
      const response= await client.query({
        query: gql`
          query {
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
      setisLoadig(false)
      
    } catch (error) {
      console.error(error)
    }
  }

  function HandleClickCard(event : any){

    const find_character = Data.find(elem => elem.id === event.id)

    if(find_character){
      localStorage.setItem("AppRickMorty", JSON.stringify(find_character))
      window.location.pathname = `/details/:${event.id}`
    }
  }

  useEffect(() => {
    LoadData()
  }, [])

  useEffect(() => {
  }, [isLoadig])
  return (
    <ContainerCards>
      { 
        !isLoadig && Data.map((elem: DtoCaracter) => (
            <Card key= {elem.id} id = {elem.id} info = {elem} onClick = {(e) => HandleClickCard(e.currentTarget)} />
          ))  
      }

    </ContainerCards>
  );
};

export default Dashboard;
