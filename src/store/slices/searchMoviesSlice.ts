import { createSlice } from "@reduxjs/toolkit";
import { MovieEntity } from '../../utils';
import { searchMovies } from "../thunks";

interface SearchMoviesSliceState {
    searched: MovieEntity[];
    isSearching: boolean
}

const initialState: SearchMoviesSliceState = { searched: [], isSearching: false };

export const searchMoviesSlice_name = "searchMovies";
export const searchMoviesSlice = createSlice({
    name: searchMoviesSlice_name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.isSearching = false;
                state.searched = [...action.payload];
            })
            .addCase(searchMovies.pending, (state, action) => {
                state.isSearching = true;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.isSearching = false;
            });
    }
});
