const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [User]!
  }
  type Query {
    users: [User]!
  }
`;

module.exports = typeDefs;
