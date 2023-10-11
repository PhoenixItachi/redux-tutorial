import { moviesSlice } from './movieSlice';
import { searchMoviesSlice } from './searchMoviesSlice';

export const reducers = {
    movies: moviesSlice.reducer,
    searchMovies: searchMoviesSlice.reducer
};