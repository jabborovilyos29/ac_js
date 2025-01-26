import { useState } from "react";
import { Container } from "@mui/material";
import { AlbumTags, PhotoList } from "@entities/index";

export const AlbumsPage = () => {
  const [selectedAlbums, setSelectedAlbums] = useState<number[]>([]);

  return (
    <Container>
      <AlbumTags selectedAlbums={selectedAlbums} onChange={setSelectedAlbums} />
      <PhotoList albumIds={selectedAlbums} />
    </Container>
  );
};
