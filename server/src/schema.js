const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
    company: Company
  }

  type Company {
    name: String
    bs: String
  }
`;

module.exports = typeDefs;
