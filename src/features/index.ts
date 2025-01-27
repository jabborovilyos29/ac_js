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
  setSearch,
  setPhotos,
  loadingSwitcher,
} from "./photo";
import { SearchBar } from "./searchBar";
import { IPhoto } from "./photo/index";

export {
  toggleAlbum,
  setSelectedAlbums,
  setSearch,
  openModal,
  setPhotos,
  closeModal,
  loadingSwitcher,
};

export type { IPhoto };

export { PhotoList, AlbumTags, SearchBar, Modal };

export { albumsReducer, photosReducer, modalReducer };
