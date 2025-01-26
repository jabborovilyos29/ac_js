import { AlbumTags } from "./ui/AlbumTags";
import { AlbumTagsProps } from "./model/types";
import filtersReducer, {
  resetFilters,
  setCurrentPage,
  setLimit,
  setSearch,
  toggleTag,
} from "./model/filtersSlice";
import albumsReducer, {
  setSelectedAlbums,
  toggleAlbum,
} from "./model/albumsSlice";

export { toggleAlbum, setSelectedAlbums };
export { setSearch, toggleTag, setCurrentPage, setLimit, resetFilters };

export { AlbumTags, filtersReducer, albumsReducer };
export type { AlbumTagsProps };
