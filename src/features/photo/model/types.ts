type PhotoListProps = {
  albumIds: number[];
};

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PhotosState {
  search: string;
  photos: {
    isLoading: boolean;
    data: IPhoto[];
  };
}

export type { PhotoListProps, PhotosState, IPhoto };
