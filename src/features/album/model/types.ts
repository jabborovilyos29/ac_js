type AlbumTagsProps = {
  selectedAlbums: number[];
  onChange: (albumIds: number[]) => void;
};

interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

interface AlbumsState {
  selectedAlbums: number[];
}

export type { AlbumTagsProps, AlbumsState, IAlbum };
