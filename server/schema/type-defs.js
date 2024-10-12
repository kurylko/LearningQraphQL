
export const typeDefs = `#graphql
type User {
  id: ID!
  name: String!
  userName: String!
  age: Int!
  nationality: String,
  friends: [String]
}

type Movie {
   id: Int!,
   name: String!,
   yearOfPublication: Int,
   isInTheaters: Boolean,
}
type Query {
users: [User!]!
movies: [Movie]
movie(name: String!): Movie
user(name: String!): User
}
`;
