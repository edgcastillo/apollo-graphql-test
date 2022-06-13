const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => {
      return dataSources.usersAPI.getUsers();
    },
  },
};

module.exports = resolvers;
