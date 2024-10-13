export const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        movies: ["Interstellar", "Avengers Endgame"],
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Kelly",
                username: "kelly2019",
                age: 5,
                nationality: "CHILE",
            },
        ],
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
        movies: ["Interstellar"],
    },
    {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
        ],
    },
    {
        id: 4,
        name: "Rafe",
        username: "rafe123",
        age: 60,
        nationality: "GERMANY",
        movies: "",
    },
    {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
    },
];


export const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "PedroTech The Movie",
        yearOfPublication: 2035,
        isInTheaters: false,
    },
];

export const ReviewList = [
    {
        id: "xy34h57",
        author: "John",
        authorId: 1,
        movieName: "PedroTech The Movie",
        text: "Not bad",
        movieId: 4,
    },
    {
        id: "xy34h50",
        author: "Kelly",
        authorId: 5,
        movieName: "PedroTech The Movie",
        text: "cool film",
        movieId: 4,
    },
    {
        id: "xy34h56",
        author: "John",
        authorId: 1,
        movieName: "Interstellar",
        text: "cool film",
        movieId: 2,
    },
];
