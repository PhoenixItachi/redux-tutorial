import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieEntity } from "../../utils";
import { AppThunkConfig } from "..";
import { MoviesDbApiClient } from "../../clients";

export const searchMovies_name = "movies/search";
export const searchMovies = createAsyncThunk<
    MovieEntity[],
    { title: string, exact: boolean },
    AppThunkConfig
>(searchMovies_name, async ({ title, exact }) => {
    const data = await MoviesDbApiClient.searchMovie(title, exact);

    return data.results.map(movie => {
        return {
            Id: movie.id,
            Description: '',
            Title: movie.titleText.text,
            ReleaseDate: movie.releaseDate ? new Date(movie.releaseDate.year, movie.releaseDate.month, movie.releaseDate.day) : undefined
        } as MovieEntity;
    });
});