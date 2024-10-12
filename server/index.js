import { startStandaloneServer } from '@apollo/server/standalone';
import {ApolloServer} from "@apollo/server";
import { typeDefs } from './schema/type-defs.js';
import { resolvers } from './schema/resolvers.js';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {

    context: ({ req }) => {
        return {};
    },
    // CORS setup
    listen: {
        port: process.env.PORT || 4000,
        cors: {
            origin: "https://studio.apollographql.com",
            credentials: true,
        }
    }
});



console.log(`API is running at ${url}`);


/*
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

*/