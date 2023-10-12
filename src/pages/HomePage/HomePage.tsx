import { FC, useEffect, useState, KeyboardEvent, useCallback } from "react";

import { useAppDispatch } from "../../store";
import { searchMovies } from "../../store/thunks";
import { useSelector } from "react-redux";
import { selectIsSearchingMovies, selectSearchMovies } from "../../store/selectors";
import { addMovie, deleteMovie } from "../../store/slices/movieSlice";
import { selectMovies } from "../../store/selectors/movieSelectors";
import { Box, Button, CardActions, CircularProgress, Container, FormControlLabel, Grid, IconButton, Switch, TextField, Typography } from "@mui/material";

// Icons
import Movie from "@mui/icons-material/LiveTv";
import DeleteIcon from '@mui/icons-material/Delete';
import { MovieCard } from "../../components/movieCard";
import { DeleteMovieDialog } from "../../components/deleteMovieDialog";

export const HomePage: FC = () => {
    const dispatch = useAppDispatch();

    const searchedMovies = useSelector(selectSearchMovies);
    const isSearchingMovies = useSelector(selectIsSearchingMovies);

    const myMoviesCollection = useSelector(selectMovies);

    const [searchTitle, setSearchTitle] = useState<string>("");
    const [exact, setExact] = useState<boolean>(false);

    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [deleteMovieId, setDeleteMovieId] = useState<string>();

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

    const onOpenDeleteModal = (movieId: string) => {
        setDeleteMovieId(movieId);
        setDeleteModalOpen(true);
    }

    const onDeleteMovie = () => {
        if (deleteMovieId)
            dispatch(deleteMovie({ movieId: deleteMovieId }));
    }

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
                            <Grid item xs={12} md={6} key={movie.Id}>
                                <MovieCard
                                    movie={movie}
                                    actions={
                                        <CardActions>
                                            <Button size="small" onClick={() => onAddToCollection(movie.Id)}>Add to Collection</Button>
                                        </CardActions>
                                    }
                                />
                            </Grid>
                        ))}
                    </Grid>


                    <Typography variant="h5">
                        My Collection:
                    </Typography>
                    <Grid container spacing={2}>
                        {myMoviesCollection.length === 0 &&
                            <Grid item xs={12}>
                                <Typography textAlign={"center"}>Your collection is empty</Typography>
                            </Grid>
                        }

                        {myMoviesCollection.map((movie) => (
                            <Grid item xs={12} md={6} key={movie.Id}>
                                <MovieCard
                                    movie={movie}
                                    actions={
                                        <CardActions>
                                            <IconButton color="error" onClick={() => onOpenDeleteModal(movie.Id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </CardActions>
                                    }
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <DeleteMovieDialog open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} onDelete={onDeleteMovie} />
        </Box>
    );
}