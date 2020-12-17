import React, { useEffect, useState } from "react"
//coordinator 
import { useHistory } from "react-router-dom"
import { goToDetails } from "../../routes/coordinator"
//API
import { getAllCharacters } from "../../services/user"
//Styles
import { TextContainer, Img, Container, Cards } from "./styles"


export default function HomePage() {
    const [card, setCard] = useState(undefined)
    const history = useHistory()

    useEffect(() => {
        getAllCharacters(setCard)
    }, [])

    return (
        <Container>
            {card &&
                card.map((item, index) => {
                    return (
                        <Cards key={index} cardId={item.id} onClick={() => goToDetails(history, item.id)}>
                            <Img src={item.image} alt={item.name} />
                            <TextContainer>
                                <h3>{item.name}</h3>
                                <p>Status: {item.status}</p>
                            </TextContainer>
                        </Cards>
                    )
                })
            }
        </Container>
    )
}