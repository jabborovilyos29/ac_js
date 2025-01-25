import React from "react";
import { Grid, Box } from "@mui/material";
import { useGetPhotosQuery } from "../api";
import { CustomCard } from "@shared/index";

type PhotoListProps = {
  albumIds: number[];
};

export const PhotoList: React.FC<PhotoListProps> = ({ albumIds }) => {
  const { data: photos, isLoading } = useGetPhotosQuery(albumIds[0], {
    skip: albumIds.length === 0,
  });

  if (isLoading) return <div>Loading photos...</div>;

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {photos?.map((photo: any) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
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
