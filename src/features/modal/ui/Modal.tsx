import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@shared/index";
import { useGetPhotoDetailsQuery } from "@features/photo/model/api";
import { closeModal } from "@features/index";
import undefinedImg from "@assets/svg/img.svg";
import { useState } from "react";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, id } = useAppSelector((state) => state.modal);
  const [isErrorImg, setErrorImg] = useState<boolean>(false);

  const handleErrorImg = () => {
    setErrorImg(true);
  };

  const {
    data: photo,
    isLoading,
    isFetching,
    isError,
  } = useGetPhotoDetailsQuery(String(id!), {
    skip: !id || !isOpen,
  });

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        dispatch(closeModal());
      }}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Photo Details</DialogTitle>
      <DialogContent>
        {isLoading || isFetching ? (
          <CircularProgress />
        ) : isError ? (
          <Typography color="error">Error loading photo details.</Typography>
        ) : (
          <>
            <img
              src={isErrorImg ? undefinedImg : photo?.url}
              alt={photo?.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
              onError={handleErrorImg}
            />
            <Typography variant="h6">{photo?.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Album ID: {photo?.albumId}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Photo ID: {photo?.id}
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
