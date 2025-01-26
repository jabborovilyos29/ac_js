import {
  albumsReducer,
  filtersReducer,
  resetFilters,
  setCurrentPage,
  setLimit,
  setSearch,
  setSelectedAlbums,
  toggleAlbum,
  toggleTag,
} from "./album/index";

export { toggleAlbum, setSelectedAlbums };
export { setSearch, toggleTag, setCurrentPage, setLimit, resetFilters };

export { filtersReducer, albumsReducer };
