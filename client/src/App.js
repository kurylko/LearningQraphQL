import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
        });
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:6969/graphql"})
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

function App() {

  return (
      <ApolloProvider client={client}>
      <div className="App">
          <h1>Hello!</h1>
      </div>
      </ApolloProvider>
  );
}

export default App;
