import { useMemo } from "react";
import { useAppSelector } from "@shared/index";
import { useDebounce } from "@shared/index";
import { IPhoto } from "@features/index";

export const useFilteredPhotos = (
  photos: IPhoto[],
  currentPage: number,
  limit: number,
) => {
  const { search } = useAppSelector((state) => state.photos);

  const debouncedSearch = useDebounce(search);

  const filteredPhotos = useMemo(() => {
    return photos?.filter((photo) =>
      photo?.title?.toLowerCase().includes(debouncedSearch?.toLowerCase()),
    );
  }, [photos, debouncedSearch]);

  const paginatedPhotos = useMemo(() => {
    return filteredPhotos?.slice(
      (currentPage - 1) * limit,
      currentPage * limit,
    );
  }, [filteredPhotos, currentPage, limit]);

  return { filteredPhotos, paginatedPhotos };
};
