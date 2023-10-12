import { MovieEntity } from "./types"

const rawMovieData = [
    {
        "Id": "tt0077869",
        "Description": "",
        "Title": "In de Ban van de Ring",
        "ReleaseDate": "1979-09-01T21:00:00.000Z",
        "CoverUrl": "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    },
    {
        "Id": "tt0167260",
        "Description": "",
        "Title": "The Lord of the Rings: The Return of the King",
        "ReleaseDate": "2004-01-16T22:00:00.000Z",
        "CoverUrl": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        "Id": "tt0167261",
        "Description": "",
        "Title": "The Lord of the Rings: The Two Towers",
        "ReleaseDate": "2003-01-17T22:00:00.000Z",
        "CoverUrl": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
        "Id": "tt0120737",
        "Description": "",
        "Title": "The Lord of the Rings: The Fellowship of the Ring",
        "ReleaseDate": "2002-01-18T22:00:00.000Z",
        "CoverUrl": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
    },
    {
        "Id": "tt5433140",
        "Description": "",
        "Title": "Fast X",
        "ReleaseDate": "2023-06-18T21:00:00.000Z",
        "CoverUrl": "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
    },
    {
        "Id": "tt4154756",
        "Description": "",
        "Title": "Avengers: Infinity War",
        "ReleaseDate": "2018-05-24T21:00:00.000Z",
        "CoverUrl": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
    },
    {
        "Id": "tt4154796",
        "Description": "",
        "Title": "Avengers: Endgame",
        "ReleaseDate": "2019-05-23T21:00:00.000Z",
        "CoverUrl": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
    }
]

export const movieData = rawMovieData.map(movie => {
    const { Id, Title, Description, CoverUrl } = movie;

    const result: MovieEntity = {
        Id,
        Title,
        Description,
        CoverUrl,
        ReleaseDate: new Date(movie.ReleaseDate)
    };

    return result;
})