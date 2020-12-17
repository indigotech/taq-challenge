import React, { useEffect, useState } from "react"
import Loading from "../../components/Header/Loading/Loading"
//styles
import { Button, Cards, Container, Img, TextContainer } from "./styles"
import arrow from "../../assets/left-arrow.svg"
//coordinators
import { useHistory, useParams } from "react-router-dom"
import { goToHome } from "../../routes/coordinator"
//API
import { getSingleCharacters, getAllEpisodes } from "../../services/user"

export default function DetailsPage() {
    const history = useHistory()
    const [detailsCard, setDetailsCard] = useState(undefined)
    const [episodes, setEpisodes] = useState(undefined)

    const { id } = useParams()

    useEffect(() => {
        getSingleCharacters(setDetailsCard, id)
        getAllEpisodes(setEpisodes)
    }, [id])


    return (
        <Container>
            <Button src={arrow} onClick={() => goToHome(history)}></Button>

            {detailsCard ?
                <Cards>
                    <Img src={detailsCard.image} alt={detailsCard.name} />
                    <TextContainer >
                        <h2>{detailsCard.name}</h2>
                        <h3>Episódios:</h3>
                        {episodes &&
                            episodes.filter((episode) => {
                                return episode.characters.includes(`https://rickandmortyapi.com/api/character/${id}`)
                            })
                                .map((item, index) => {
                                    return <li key={index}>{item.name}</li>
                                })}

                    </TextContainer>
                </Cards>
                : <Loading />}
        </Container>
    )
}