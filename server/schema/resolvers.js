import {MovieList, UserList, ReviewList} from '../fakeData.js';

export const resolvers = {
    Query: {
        users: () => UserList,
        movies: () => MovieList,
        movie:(_, args) => MovieList.find((movie) => movie.name === args.name),
        user:(_, args) => UserList.find((user) => user.name === args.name),
        reviews: () => ReviewList,
        review: (_, args) => ReviewList.find((review) => review.id === args.id),
    },
    Movie: {
        reviews(parent){
            return ReviewList.filter((review) => review.movieName === parent.name)
        }
    }
};


