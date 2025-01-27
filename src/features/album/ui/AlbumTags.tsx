import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import { useGetAlbumsQuery } from "../model/api";
import { useAlbumTags } from "../lib/index";
import { AlbumsSkeleton } from "@shared/index";

export const AlbumTags = () => {
  const { data: albums, isLoading } = useGetAlbumsQuery();
  const { selectedAlbums, handleToggleAlbum } = useAlbumTags();

  if (isLoading) return <AlbumsSkeleton />;

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="album-select-label">Select Albums</InputLabel>
        <Select
          labelId="album-select-label"
          multiple
          input={<OutlinedInput label="Select Albums" />}
          value={selectedAlbums}
          onChange={(evt: SelectChangeEvent<number[]>) => {
            handleToggleAlbum(evt.target.value as number[]);
          }}
          renderValue={(selected) =>
            albums
              ?.filter((album: any) => selected.includes(album.id))
              .map((album: any) => album.title)
              .join(", ")
          }
        >
          {albums?.map((album: any) => (
            <MenuItem key={album.id} value={album.id}>
              <Checkbox checked={selectedAlbums.includes(album.id)} />
              <ListItemText primary={album.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
