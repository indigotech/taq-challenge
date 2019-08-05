import React from 'react';
import styled from 'styled-components';

import DetailsModal from './DetailsModal';

class ListItem extends React.Component {
  state = {
    displayDetails: false
  };

  showDetails = (e) => {
    e.preventDefault();
    this.setState({ displayDetails: true });
  };

  hideDetails = (e) => {
    e.preventDefault();
    this.setState({ displayDetails: false });
  };

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

    const PokeImage = styled.img.attrs({
      src: this.props.pokemon.image
    })`
      mix-blend-mode: multiply;
      width: 5rem;

      @media only screen and (max-width: 768px) {
        display: block;
        margin: 0 auto;
        width: 7rem;
      }
    `;

    const PokeInfo = styled.div`
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    `;

    const PokeNumber = styled.span`
      margin-right: .5rem;
      margin-top: 1.5rem;

      @media only screen and (max-width: 768px) {
        display: block;
        position: absolute;
      }
    `;

    const PokeName = styled.span`
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1rem;

      @media only screen and (max-width: 768px) {
        display: block;
        margin: 1rem auto;
      }
    `;

    return(
      <div>
        <Item onClick={this.showDetails}>
          <PokeImage />
          <PokeInfo>
            <PokeName>{this.props.pokemon.name}</PokeName>
            <PokeNumber>{this.props.pokemon.number}</PokeNumber>
          </PokeInfo>
        </Item>
        <DetailsModal show={this.state.displayDetails} handleClose={this.hideDetails} pokemon={this.props.pokemon}/>
      </div>
    );
  }
}

export default ListItem;