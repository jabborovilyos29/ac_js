type PhotoListProps = {
  albumIds: number[];
};

interface PhotosState {
  search: string;
  currentPage: number;
  limit: number;
}

export type { PhotoListProps, PhotosState };
