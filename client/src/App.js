import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {GetUsers} from "./Components/GetUsers";
import {LOAD_USERS} from "./GraphQL/Queries";
import {MockedProvider} from "@apollo/client/testing";
import {Users} from "./fakeData";

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({message, locations, path}) => {
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

const mocks = [
    {
        request: {
            query: LOAD_USERS,
        },
        result: {
            data: {
                getAllUsers: Users,
            },
        },
    },
];


function App() {

    return (
        <ApolloProvider client={client}>
            <MockedProvider mocks={mocks} addTypename={false}>
                <div className="App">
                    <h1>Hello!</h1>
                    <GetUsers/>
                </div>
            </MockedProvider>
        </ApolloProvider>
    );
}

export default App;
