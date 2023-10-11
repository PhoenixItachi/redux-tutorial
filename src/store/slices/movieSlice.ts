import { createSlice } from "@reduxjs/toolkit";
import { MovieEntity } from '../../utils';

interface MoviesSliceState {
    movies: MovieEntity[]
}

const initialState: MoviesSliceState = { movies: [] };

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
    },
});

export const {
    addMovie, addMovies
} = moviesSlice.actions;
