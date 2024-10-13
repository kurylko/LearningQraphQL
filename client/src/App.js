import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {GetUsers} from "./Components/GetUsers";
import {LOAD_USERS} from "./GraphQL/Queries";
import {CREATE_USER_MUTATION} from "./GraphQL/Mutation";
import {MockedProvider} from "@apollo/client/testing";
import {Users} from "./fakeData";
import {Form} from "./Components/Form";

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
    {
        request: {
            query: CREATE_USER_MUTATION,
            variables: {
                name: "Amy Lee",
                email: "amy@com"
            },
        },
        result: {
            data: {
                createUser: {
                    id: 1
                },
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
                    <Form/>
                    <GetUsers/>
                </div>
            </MockedProvider>
        </ApolloProvider>
    );
}

export default App;
