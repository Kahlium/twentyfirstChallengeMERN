const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [User]!
  }
`;

module.exports = typeDefs;
