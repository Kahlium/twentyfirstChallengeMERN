const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }
  type Book {
    bookId: ID
    authors:
    description: String
    title: String
    image:
    link:
  }
  type Query {
    me: [User]!
  }
  type Mutation {
    login:
    addUser:
    saveBook:
    removeBook:
  }
  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
