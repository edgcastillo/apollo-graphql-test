const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  getUsers() {
    return this.get('users');
  }
}

module.exports = UsersAPI;
