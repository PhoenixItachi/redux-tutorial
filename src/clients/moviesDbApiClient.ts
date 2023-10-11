import axios from 'axios';

import { SearchMoviesResponse } from '../utils';

export const MoviesDbApiClient = {
    searchMovie: async (title: string, exact: boolean = false): Promise<SearchMoviesResponse> => {
        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`,
            params: {
                exact: exact,
                titleType: 'movie'
            },
            headers: {
                'X-RapidAPI-Key': '633aefba14msh940390552f80477p165721jsnc4949baba435',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            return response.data as SearchMoviesResponse;
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    }
}
