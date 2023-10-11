import { FC, useEffect, useState, KeyboardEvent, useCallback } from "react";

import { useAppDispatch } from "../../store";
import { searchMovies } from "../../store/thunks";
import { useSelector } from "react-redux";
import { selectIsSearchingMovies, selectSearchMovies } from "../../store/selectors";
import { addMovie } from "../../store/slices/movieSlice";
import { selectMovies } from "../../store/selectors/movieSelectors";
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Container, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import Movie from "@mui/icons-material/LiveTv";
import { formatDate } from "../../utils/helpers";

export const HomePage: FC = () => {
    const dispatch = useAppDispatch();

    const searchedMovies = useSelector(selectSearchMovies);
    const isSearchingMovies = useSelector(selectIsSearchingMovies);

    const myMoviesCollection = useSelector(selectMovies);

    const [searchTitle, setSearchTitle] = useState<string>("");
    const [exact, setExact] = useState<boolean>(false);

    useEffect(() => {
        if (searchTitle) onSearchMovie();
    }, [exact]);

    const onSearchMovie = useCallback(() => dispatch(searchMovies({ title: searchTitle, exact })), [searchTitle, exact, dispatch]);

    const onAddToCollection = (movieId: string) => {
        const movie = searchedMovies.find(m => m.Id === movieId);
        if (!movie) return;

        dispatch(addMovie(movie));
    }

    const onSearchInputKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            onSearchMovie();
        };
    };

    return (
        <Box height={"100vh"} width={1} bgcolor="background.default" className="App">
            <Container maxWidth="lg">

                <Box display={"flex"} gap={4} flexDirection={"column"} p={8}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2}>
                        <Movie fontSize={"large"} />
                        <Typography variant="h3" align="center">Movie Tracker</Typography>
                    </Box>

                    <Box display={"flex"} flexDirection={"column"}>
                        <TextField label="Search movie" variant="outlined" placeholder="Input title" onKeyDown={onSearchInputKeyDown} onChange={(event) => setSearchTitle(event.target.value)} />
                        <FormControlLabel control={<Switch checked={exact} onChange={() => setExact(!exact)} />} label="Exact" />

                        {isSearchingMovies &&
                            <Box textAlign={"center"} p={8}>
                                <CircularProgress />
                                <Typography>Searching...</Typography>
                            </Box>
                        }
                    </Box>


                    <Grid container spacing={2}>
                        {!isSearchingMovies && searchedMovies.map((movie) => (
                            <Grid item xs={12} md={6}>
                                <Card key={movie.Id}>
                                    <CardContent>
                                        <Typography>
                                            {movie.Title}
                                        </Typography>

                                        {movie.ReleaseDate &&
                                            <Typography variant="caption" color="text.secondary">
                                                {formatDate(movie.ReleaseDate)}
                                            </Typography>
                                        }
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => onAddToCollection(movie.Id)}>Add to Collection</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>


                    <Typography variant="h5">
                        My Collection:
                    </Typography>
                    <Grid container spacing={2}>
                        {myMoviesCollection.map((movie) => (
                            <Grid item xs={12} md={6}>
                                <Card key={movie.Id}>
                                    <CardContent>
                                        <Typography>
                                            {movie.Title}
                                        </Typography>

                                        {movie.ReleaseDate &&
                                            <Typography variant="caption" color="text.secondary">
                                                {formatDate(movie.ReleaseDate)}
                                            </Typography>
                                        }
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}