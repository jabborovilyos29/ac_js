import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useGetPhotosQuery } from "../model/api";
import { CustomCard, PhotoListSkeleton, useAppDispatch } from "@shared/index";
import { useFilteredPhotos } from "../lib";
import { Modal } from "@features/modal";
import { openModal } from "@features/index";

export const PhotoList = ({ albumIds }: { albumIds: number[] }) => {
  const dispatch = useAppDispatch();
  const { data: photos, isLoading } = useGetPhotosQuery(albumIds[0], {
    skip: albumIds.length === 0,
  });

  const { paginatedPhotos } = useFilteredPhotos(photos || []);

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
      <Modal />
    </>
  );
};
