import { AlbumTags } from "./ui/AlbumTags";
import { AlbumTagsProps } from "./model/types";

import albumsReducer, {
  setSelectedAlbums,
  toggleAlbum,
} from "./model/albumsSlice";

export { toggleAlbum, setSelectedAlbums };
export {};

export { AlbumTags, albumsReducer };
export type { AlbumTagsProps };
