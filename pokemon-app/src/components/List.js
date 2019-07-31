import React from 'react';
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

    return (
      <Query query={POKEMONS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div>Loading Pokemon list...</div>
          if (error) return <div>Error while loading Pokemon list!</div>

          const pokemonsToRender = data.query.pokemons;

          return (
            <div>
              {pokemonsToRender.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)}
            </div>
          )
        }}
      </Query>
    );
  }
}

export default List;