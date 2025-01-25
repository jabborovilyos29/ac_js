import { useState } from "react";
import { Container } from "@mui/material";
import { AlbumTags } from "@entities/album/ui/AlbumTags";
import { PhotoList } from "@entities/photo/ui/PhotoList";

export const AlbumsPage = () => {
  const [selectedAlbums, setSelectedAlbums] = useState<number[]>([]);

  return (
    <Container>
      <AlbumTags selectedAlbums={selectedAlbums} onChange={setSelectedAlbums} />
      <PhotoList albumIds={selectedAlbums} />
    </Container>
  );
};
