import { Chip, Box } from "@mui/material";
import { useGetAlbumsQuery } from "../model/api";
import { AlbumTagsProps } from "../model/types";

export const AlbumTags = (props: AlbumTagsProps) => {
  const { selectedAlbums, onChange } = props;
  const { data: albums, isLoading } = useGetAlbumsQuery();

  const handleToggleAlbum = (id: number) => {
    if (selectedAlbums.includes(id)) {
      onChange(selectedAlbums.filter((albumId) => albumId !== id));
    } else {
      onChange([...selectedAlbums, id]);
    }
  };

  if (isLoading) return <div>Loading tags...</div>;

  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {albums?.map((album: any) => (
        <Chip
          key={album.id}
          label={album.title}
          color={selectedAlbums.includes(album.id) ? "primary" : "default"}
          onClick={() => handleToggleAlbum(album.id)}
        />
      ))}
    </Box>
  );
};
