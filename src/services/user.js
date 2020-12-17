//Services
import api from './api';

export const getAllCharacters = (setData) => {
    api
        .get('/character')
        .then(response => {
            setData(response.data.results)
        }).catch(error => {
            console.log(error.message)
        })
}
export const getAllEpisodes = (setData) => {
  api
      .get('/episode')
      .then(response => {
          setData(response.data.results)
      }).catch(error => {
          console.log(error.message)
      })
}


export const getSingleCharacters = (setData, id) => {
    api
        .get(`/character/${id}`)
        .then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error.message)
        })
}

