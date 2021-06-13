import {BASE_URL} from "../constants/urls"
import axios from "axios"

export const getCharacterList = (changePage, setInfo, setResults) =>{
    if(!changePage){
        changePage=1
    }
    const body ={
      query: `query {
        characters(page:${changePage}){
          info{
          next 
          prev
          }
          results{
            id
            name
            status
            image
          } 
        }
          }`
    }
    axios.post(BASE_URL, body)
    .then((res)=>{
        const {info, results} =(res.data.data.characters)
        setInfo(info)
        setResults(results)
    })
    .catch((err)=>{
alert(err)
    })
  }

  export const getCharacterDetail = (id, setName, setImage, setEpisode) =>{

    const body ={
      query: `query {
        character(id: ${id}) {
              name
              image
              episode{name}
        }
      }`
    }
    axios.post(BASE_URL, body)
    .then((res)=>{
        const {name, image, episode =[]} = res.data.data.character
        setName(name)
        setImage(image)
        setEpisode(episode)
    })
    .catch((err)=>{
        alert(err)
    })
  }