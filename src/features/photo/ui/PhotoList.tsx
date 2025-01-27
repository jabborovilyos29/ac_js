import { Box, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  CustomCard,
  PhotoListSkeleton,
  useAppDispatch,
  useAppSelector,
} from "@shared/index";
import { useFilteredPhotos } from "../lib";
import { Modal } from "@features/modal";
import { openModal } from "@features/index";
import { useState } from "react";

const limit = 10;

export const PhotoList = () => {
  const dispatch = useAppDispatch();
  const { data: photos, isLoading } = useAppSelector(
    (state) => state.photos.photos,
  );
  const totalPages = Math.ceil((photos?.length || 0) / limit);

  const [currentPage, setCurrentPage] = useState(1);

  const { paginatedPhotos } = useFilteredPhotos(
    photos || [],
    currentPage,
    limit,
  );

  if (isLoading) return <PhotoListSkeleton count={6} />;

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {paginatedPhotos?.map((photo) => (
            <Grid key={photo.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <CustomCard
                title={photo.title}
                body={`Album ID: ${photo.albumId}`}
                image={photo?.thumbnailUrl}
                onClick={() => dispatch(openModal(photo.id))}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {photos?.length !== 0 && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
          />
        </Box>
      )}
      <Modal />
    </>
  );
};
