type AlbumTagsProps = {
  selectedAlbums: number[];
  onChange: (albumIds: number[]) => void;
};
interface FiltersState {
  search: string;
  selectedTags: number[];
  currentPage: number;
  limit: number;
}

interface AlbumsState {
  selectedAlbums: number[];
}

export type { AlbumTagsProps, FiltersState, AlbumsState };
