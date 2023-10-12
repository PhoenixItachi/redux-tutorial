import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { FC } from "react";

interface DeleteMovieDialogProps {
    open: boolean;
    onDelete: () => void;
    onClose: () => void;
}

export const DeleteMovieDialog: FC<DeleteMovieDialogProps> = ({ open, onDelete, onClose }) => {
    const handleOnDelete = () => {
        onClose();
        onDelete && onDelete();
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Delete movie</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to remove this movie from the collection?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleOnDelete} autoFocus color="error">Delete movie</Button>
            </DialogActions>
        </Dialog>
    );
}