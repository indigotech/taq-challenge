import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class List extends React.Component {
  render() {
    const POKEMONS_QUERY = gql`
      {
        query {
          pokemons(first: 50) {
            id
            name
            number
            image
          }
        }
      }
    `;

    const Container = styled.section`
      max-width: 65rem;
      margin: 0 auto;
      margin-bottom: 2rem;
    `;

    const Title = styled.h1`
      font-size: 2.5rem;
      text-align: center;
    `;

    return (
      <Query query={POKEMONS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div>Loading Pokemon list...</div>
          if (error) return <div>Error while loading Pokemon list!</div>

          const pokemonsToRender = data.query.pokemons;

          return (
            <Container>
              <Title>Pokemon List</Title>
              {pokemonsToRender.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)}
            </Container>
          )
        }}
      </Query>
    );
  }
}

export default List;