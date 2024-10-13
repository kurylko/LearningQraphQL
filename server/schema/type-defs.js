
export const typeDefs = `#graphql
type User {
    id: ID!
    name: String!
    userName: String!
    age: Int!
    nationality: String,
    friends: [User!],
    movies: [Movie!]
}

type Movie {
    id: Int!,
    name: String!,
    yearOfPublication: Int,
    isInTheaters: Boolean,
    reviews: [Review!]
}

type Review {
    id: ID!,
    author: String!,
    authorId: ID!,
    movieName: String!,
    text: String!,
    movieId: ID!,
}

type Mutation {
    deleteMovie(name: String!) : [Movie],
    addMovie(movie: AddMovieInput!) : Movie
}

input AddMovieInput {
    name: String!
    yearOfPublication: Int,
    isInTheaters: Boolean,
}

type Query {
    users: [User!]!
    movies: [Movie]
    movie(name: String!): Movie
    user(name: String!): User
    reviews: [Review]
    review(id: ID!): Review
}
`;
