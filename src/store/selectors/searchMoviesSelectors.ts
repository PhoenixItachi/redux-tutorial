import { RootState } from "..";
import { MovieEntity } from "../../utils";

export const selectSearchMovies = (state: RootState): MovieEntity[] => state.searchMovies.searched;
export const selectIsSearchingMovies = (state: RootState): Boolean => state.searchMovies.isSearching;