
import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

// Setting the client for graphql requests
export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });