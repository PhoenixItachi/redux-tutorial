import { FC, ReactElement } from "react";
import { MovieEntity, formatDate } from "../utils";
import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import { MovieCover } from "./movieCoves";
import DeleteIcon from '@mui/icons-material/Delete';

interface MovieCardProps {
    movie: MovieEntity;
    actions?: ReactElement
}

export const MovieCard: FC<MovieCardProps> = ({ movie, actions }) => {
    return (
        <Card key={movie.Id}>
            <Box display={"flex"}>
                {movie.CoverUrl &&
                    <Box>
                        <MovieCover url={movie.CoverUrl} />
                    </Box>
                }
                <Box>
                    <CardContent>
                        <Typography>{movie.Title}</Typography>

                        {movie.ReleaseDate &&
                            <Typography variant="caption" color="text.secondary">
                                {formatDate(movie.ReleaseDate)}
                            </Typography>
                        }
                    </CardContent>

                    {actions}
                </Box>
            </Box>
        </Card>
    )
}