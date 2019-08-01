import React from 'react';
import styled from 'styled-components';

class ListItem extends React.Component {
  render() {
    const Item = styled.section`
      border: 1px solid lightgrey;
      cursor: pointer;
      margin: .1rem 1rem;
      padding: 1rem 2rem;

      :hover {
        background: #DFFFFF;
      }
    `;

    const Image = styled.img.attrs({
      src: this.props.pokemon.image
    })`
      mix-blend-mode: multiply;
      width: 5rem;
    `;

    const Info = styled.span`
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    `;

    const Number = styled.span`
      margin-right: .5rem;
      margin-top: 1.5rem;
    `;

    const Name = styled.span`
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1rem;
    `;

    return(
      <div>
        <Item>
          <Image />
          <Info>
            <Name>{this.props.pokemon.name}</Name>
            <Number>{this.props.pokemon.number}</Number>
          </Info>
        </Item>
      </div>
    );
  }
}

export default ListItem;