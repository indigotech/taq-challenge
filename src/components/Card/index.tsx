import React from 'react';
import { DtoCaracter } from '../../pages/Dashboard';

import { Container, Image, Content } from './styles';

type Props = {
  onClick?: React.MouseEventHandler, 
  info: DtoCaracter,
  id: string
}


const Card: React.FC<Props> = ({onClick, id ,info}: Props) => {
  return (
    <Container onClick = {onClick} id = {id}>
      <Image src={info.image} alt="img" />
      <Content>
        <h2>{info.name}</h2>
        <span>{info.status}</span>
      </Content>

    </Container>
  );
};

export default Card;
