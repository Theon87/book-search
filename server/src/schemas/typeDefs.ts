const typeDefs = `
  type Users {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
  }

  type Query {
    Users: [User]
    User(_id: ID!): User
  }
`;

export default typeDefs;