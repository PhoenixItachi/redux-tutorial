import { createSlice } from "@reduxjs/toolkit";
import { MovieEntity } from '../../utils';
import { movieData } from "../../utils/data";

interface MoviesSliceState {
    movies: MovieEntity[]
}

const initialState: MoviesSliceState = { movies: movieData };

export const moviesSlice_name = "movies";
export const moviesSlice = createSlice({
    name: moviesSlice_name,
    initialState,
    reducers: {
        addMovie: (state, { payload }: { payload: MovieEntity }) => {
            if (state.movies.some(m => m.Id === payload.Id)) return;
            state.movies.push(payload);
        },
        addMovies: (state, { payload }: { payload: MovieEntity[] }) => {
            state.movies = state.movies.concat(payload);
        },
        deleteMovie: (state, { payload }: { payload: { movieId: string } }) => {
            const { movieId } = payload;
            state.movies = state.movies.filter(m => m.Id !== movieId);
        },
        updateMovie: (state, { payload }: { payload: MovieEntity }) => {
            const movieIndex = state.movies.findIndex(m => m.Id === payload.Id);

            if (movieIndex < 0) return;

            state.movies[movieIndex] = { ...payload };
        }
    },
});

export const {
    addMovie, addMovies, deleteMovie, updateMovie
} = moviesSlice.actions;
