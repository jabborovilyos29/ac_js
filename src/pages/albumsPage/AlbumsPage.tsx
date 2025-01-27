import { AlbumTags, PhotoList, SearchBar } from "@features/index";
import { Container } from "@mui/material";
import { useAppSelector } from "@shared/index";

export const AlbumsPage = () => {
  const selectedAlbums = useAppSelector((state) => state.albums.selectedAlbums);

  return (
    <Container>
      <SearchBar />
      <AlbumTags />
      <PhotoList albumIds={selectedAlbums} />
    </Container>
  );
};
