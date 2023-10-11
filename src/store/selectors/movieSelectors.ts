import { RootState } from "..";
import { MovieEntity } from "../../utils";

export const selectMovies = (state: RootState): MovieEntity[] => state.movies.movies;