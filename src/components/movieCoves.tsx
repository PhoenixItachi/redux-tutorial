import { FC } from "react";

import { CardMedia } from "@mui/material";

interface MovieCoverProps {
    url: string;
    width?: number;
}

export const MovieCover: FC<MovieCoverProps> = ({ url, width = 151 }) => (
    <CardMedia
        component="img"
        sx={{ width }}
        image={url}
        alt="Live from space album cover"
    />
);