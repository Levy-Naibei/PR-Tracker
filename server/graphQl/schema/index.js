import { gql } from 'apollo-server';

const typeDefs = gql`
    type User {
        _id: Int!,
        name: String!
        email: String!
    }

    type Query { getUsers: [User]! },
    type Mutation { createUser(name: String!, email: String!): User! }

    type Schema { query: Query, mutation: Mutation }
`

export default typeDefs;