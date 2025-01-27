import { useMemo } from "react";
import { useAppSelector } from "@shared/index";
import { useDebounce } from "@shared/index";

export const useFilteredPhotos = (photos: any[]) => {
  const { search, currentPage, limit } = useAppSelector(
    (state) => state.photos,
  );

  const debouncedSearch = useDebounce(search);

  const filteredPhotos = useMemo(() => {
    return photos?.filter((photo) =>
      photo.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
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
