type AlbumTagsProps = {
  selectedAlbums: number[];
  onChange: (albumIds: number[]) => void;
};

interface AlbumsState {
  selectedAlbums: number[];
}

export type { AlbumTagsProps, AlbumsState };
