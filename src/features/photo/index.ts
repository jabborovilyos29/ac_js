import photosReducer, {
  setSearch,
  setPhotos,
  loadingSwitcher,
} from "./model/photosSlice";
import { PhotoListProps, IPhoto } from "./model/types";
import { PhotoList } from "./ui/PhotoList";

export { PhotoList };
export { photosReducer };

export { setSearch, setPhotos, loadingSwitcher };

export type { PhotoListProps, IPhoto };
