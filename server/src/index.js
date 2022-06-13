const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const UsersAPI = require('./datasources/users-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return { usersAPI: new UsersAPI() };
  },
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Query at https://studio.apollographql.com/dev
  `);
});
