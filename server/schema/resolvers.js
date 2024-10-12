import {MovieList, UserList} from '../fakeData.js';

export const resolvers = {
    Query: {
        users: () => UserList,
        movies: () => MovieList
    }
};


