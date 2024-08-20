const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Query {
    me: [User]!
  }
  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: ID!, book: String!): User
    removeBook(book: String!): User
  }
  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
