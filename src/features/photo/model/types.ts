type PhotoListProps = {
  albumIds: number[];
};

interface PhotosState {
  search: string;
  photos: {
    isLoading: boolean;
    data: any[];
  };
}

export type { PhotoListProps, PhotosState };
