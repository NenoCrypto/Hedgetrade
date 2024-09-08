// apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CREDENTIALS_LOCAL_STORAGE_ITEM } from "../constants";

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`,
});

// Set up authorization headers for requests
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
