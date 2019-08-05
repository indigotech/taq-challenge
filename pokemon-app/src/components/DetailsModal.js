import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

class DetailsModal extends React.Component {
  render() {
    const Card = {
      content: {
        margin: '0 auto',
        height: '30rem',
        width: '25rem',
      }
    };
    
    const Button = styled.button`
      background: orange;
      box-shadow: 1px 1px lightgrey;
      bottom: 2rem;
      cursor: pointer;
      height: 2rem;
      position: absolute;
      right: 11rem;
      width: 5rem;
    `;

    const ButtonText = styled.h4`
      bottom: .8rem;
      font-weight: bold;
      position: relative;
    `;

    const ImageWrapper = styled.div`
      background: lightgrey;
    `;

    const PokeImage = styled.img.attrs({
      src: this.props.pokemon.image
    })`
      display: block;
      mix-blend-mode: multiply;
      width: 8rem;
      margin: 0 auto;
    `;

    const PokeName = styled.h1`
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    `;

    const SpecialAttacks = styled.h3`
      font-size: 1.2rem;
    `;

    const Attack = styled.li`
      font-size: 1rem;
      font-style: italic;
      list-style-type: none;
      padding: .5rem 0;
      margin-left: 1rem;
    `;
    
    return(
      <Modal
        isOpen={!!this.props.show}
        onRequestClose={this.props.handleClose}
        contentLabel=""
        closeTimeoutMS={200}
        style={Card}
      >
        <ImageWrapper>
          <PokeImage />
        </ImageWrapper>
        <hr />
        <PokeName>{this.props.pokemon.name}</PokeName>
        <hr />
        <SpecialAttacks>Special Attacks</SpecialAttacks>
        {this.props.pokemon.attacks.special.map((attack) => 
          <Attack key={Math.random()}>{attack.name}</Attack>
        )}
        <Button onClick={this.props.handleClose}><ButtonText>CLOSE</ButtonText></Button>
      </Modal>
    );
  }
};

Modal.setAppElement('#root');

export default DetailsModal;