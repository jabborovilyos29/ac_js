import { useAppDispatch, useAppSelector } from "@shared/index";
import { loadingSwitcher, setPhotos, toggleAlbum } from "@features/index";
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
        const res = trigger(id).unwrap();
        return res;
      }),
    )
      .then((results) => {
        const result: any[] = [];
        results.forEach((res) => {
          result.push(...res);
        }),
          dispatch(setPhotos(result));
      })
      .catch((error) => {
        console.error(error);
      });

    dispatch(loadingSwitcher(false));
  };

  return { selectedAlbums, handleToggleAlbum };
};
