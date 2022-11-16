import { gql } from 'apollo-server';

const typeDefs = gql`
    type User {
        _id: Int!
        name: String!
        email: String!
    }

    type AuthResponse {
        token: String!
        name: String!
        image: String
    }

    type node {
        state: String!
        title: String!
        number: Int!
        permalink: String!
        author: Author!
    }

    type Author {
        url: String!
        avatarUrl: String!
        resourcePath: String!
    }

    input RepoInfo {
        orgName: String!
        repoName: String!
        labelTag: String!
        numberOfPRs: Int!
    }

    input PRinfo {
        orgName: String!
        repoName: String!
        prNumber: String!
        displayNumber: Int!
    }

    type prAssignees {
        name: String!
        avatarUrl: String!
     }

    type labelInfo { 
        name: String!
        description: String!
    }

    type pullRequest {
        state: String!
        labels: [labelInfo]
        assignees: [prAssignees]
    }

    type Query { 
        viewPrAssignees(input: PRinfo!): pullRequest
        viewLabeledTasks(input: RepoInfo!): [node]
    }

    type Mutation {
        signup(name: String!, email: String!): User!
        login(personalAccessToken: String!): AuthResponse!
    }

    type Schema { query: Query, mutation: Mutation }
`

export default typeDefs;