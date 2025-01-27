import photosReducer, {
  setCurrentPage,
  setLimit,
  setSearch,
} from "./model/photosSlice";
import { PhotoListProps } from "./model/types";
import { PhotoList } from "./ui/PhotoList";

export { PhotoList };
export { photosReducer };

export { setSearch, setCurrentPage, setLimit };

export type { PhotoListProps };
