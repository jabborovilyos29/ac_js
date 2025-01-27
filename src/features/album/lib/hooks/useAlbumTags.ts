import { useAppDispatch, useAppSelector } from "@shared/index";
import { toggleAlbum } from "@features/index";

export const useAlbumTags = () => {
  const dispatch = useAppDispatch();
  const selectedAlbums = useAppSelector((state) => state.albums.selectedAlbums);

  const handleToggleAlbum = (albumIds: number[]) => {
    dispatch(toggleAlbum(albumIds));
  };

  return { selectedAlbums, handleToggleAlbum };
};
