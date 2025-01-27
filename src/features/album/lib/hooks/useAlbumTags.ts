import { useAppDispatch, useAppSelector } from "@shared/index";
import {
  IPhoto,
  loadingSwitcher,
  setPhotos,
  toggleAlbum,
} from "@features/index";
import { useLazyGetPhotosQuery } from "@features/photo/model/api";

export const useAlbumTags = () => {
  const dispatch = useAppDispatch();
  const selectedAlbums = useAppSelector((state) => state.albums.selectedAlbums);

  const [trigger] = useLazyGetPhotosQuery();

  const handleToggleAlbum = (albumIds: number[]) => {
    dispatch(toggleAlbum(albumIds));
    dispatch(loadingSwitcher(true));

    Promise.all(
      albumIds.map((id) => {
        const res: Promise<Array<IPhoto>> = trigger(id).unwrap();
        return res;
      }),
    )
      .then((results: Array<IPhoto[]>) => {
        const result: IPhoto[] = [];
        results.forEach((res: IPhoto[]) => {
          result.push(...res);
        });
        dispatch(setPhotos(result));
      })
      .catch((error) => {
        console.error(error);
      });

    dispatch(loadingSwitcher(false));
  };

  return { selectedAlbums, handleToggleAlbum };
};
