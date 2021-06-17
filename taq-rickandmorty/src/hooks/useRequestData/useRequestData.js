import {BASE_URL} from "../../constants/urls"
import { useEffect, useState } from "react";
import axios from "axios"

export const useRequestData = (query) =>{
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const getData =() =>{

    axios.post(BASE_URL, query)
      .then((res)=>{
          setData(res.data.data)        
      })
      .catch((err)=>{
        setError(true)
      })
  } 
   useEffect(() => {
    getData();
  }, [query]);
  return {data, error}
  }