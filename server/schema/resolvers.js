import {MovieList, UserList} from '../fakeData.js';

export const resolvers = {
    Query: {
        users: () => UserList,
        movies: () => MovieList,
        movie:(_, args) => MovieList.find((movie) => movie.name === args.name),
    }
};


