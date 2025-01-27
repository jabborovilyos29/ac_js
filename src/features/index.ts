import {
  albumsReducer,
  AlbumTags,
  setSelectedAlbums,
  toggleAlbum,
} from "./album";
import { closeModal, Modal, modalReducer, openModal } from "./modal";
import {
  PhotoList,
  photosReducer,
  setCurrentPage,
  setLimit,
  setSearch,
} from "./photo";
import { SearchBar } from "./searchBar";

export {
  toggleAlbum,
  setSelectedAlbums,
  setSearch,
  setCurrentPage,
  setLimit,
  openModal,
  closeModal,
};

export { PhotoList, AlbumTags, SearchBar, Modal };

export { albumsReducer, photosReducer, modalReducer };
