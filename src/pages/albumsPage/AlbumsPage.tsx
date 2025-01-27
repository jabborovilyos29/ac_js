import { AlbumTags, PhotoList, SearchBar } from "@features/index";
import { Container } from "@mui/material";

export const AlbumsPage = () => {
  return (
    <Container>
      <SearchBar />
      <AlbumTags />
      <PhotoList />
    </Container>
  );
};
