import { Box, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useGetPhotosQuery } from "../model/api";
import {
  CustomCard,
  useAppDispatch,
  useAppSelector,
  useDebounce,
} from "@shared/index";
import { PhotoListProps } from "../model/types";
import { toggleTag } from "@features/album/model/slices/filtersSlice";

export const PhotoList = (props: PhotoListProps) => {
  const { albumIds } = props;

  const dispatch = useAppDispatch();
  const { search, selectedTags, currentPage, limit } = useAppSelector(
    (state) => state.filters,
  );
  const debouncedSearch = useDebounce(search);

  const { data: photos, isLoading } = useGetPhotosQuery(albumIds[0], {
    skip: albumIds.length === 0,
  });

  const handleTagClick = (albumId: number) => {
    dispatch(toggleTag(albumId));
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {photos?.map((photo: any) => (
          <Grid key={photo.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard
              title={photo.title}
              body={`Album ID: ${photo.albumId}`}
              image={photo.thumbnailUrl}
              onClick={() => console.log("Photo clicked:", photo.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
