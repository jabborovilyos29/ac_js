import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function PhotoListSkeleton(props: { count: number }) {
  const { count } = props;
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {Array.from(new Array(count)).map((item) => (
          <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PhotoListSkeleton;
