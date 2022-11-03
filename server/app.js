import { ApolloServer } from 'apollo-server';
import typeDefs from './graphQl/schema/index.js';

const server = new ApolloServer({
    typeDefs,
    playground: true,
    context: ({ req }) => ({ req })
});

export default server;