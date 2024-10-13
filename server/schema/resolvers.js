import {MovieList, UserList, ReviewList} from '../fakeData.js';

export const resolvers = {
    Query: {
        users: () => UserList,
        movies: () => MovieList,
        movie: (_, args) => MovieList.find((movie) => movie.name === args.name),
        user: (_, args) => UserList.find((user) => user.name === args.name),
        reviews: () => ReviewList,
        review: (_, args) => ReviewList.find((review) => review.id === args.id),
    },
    Movie: {
        reviews(parent) {
            return ReviewList.filter((review) => review.movieName === parent.name)
        }
    },

    Mutation: {
        deleteMovie(_, args) {
            //MovieList = MovieList.filter((movie) => movie.name === args.name)
            const index = MovieList.findIndex(movie => movie.name === args.name);
            if (index > -1) {
                MovieList.splice(index, 1);
            }
            return MovieList;
        },

        addMovie(_, args) {
            const movie = args.movie;
            const newMovie = {
                id: MovieList.length + 1,
                name: movie.name,
                yearOfPublication: movie.yearOfPublication,
                isInTheaters: movie.isInTheaters,
                reviews: []
            };
            MovieList.push(newMovie);
            return newMovie;
        },
        updateMovie(_, args) {
            const movieIndex = MovieList.findIndex(movie => movie.name === args.name);
            if (movieIndex === -1) {
                throw new Error('Movie not found');
            }
            const updatedMovie = {
                ...MovieList[movieIndex],
                ...args.edits
            };
            MovieList[movieIndex] = updatedMovie;

            return updatedMovie;
        }
    }
};


