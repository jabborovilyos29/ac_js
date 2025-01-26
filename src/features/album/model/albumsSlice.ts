import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumsState } from "./types";

const initialState: AlbumsState = {
  selectedAlbums: [],
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    toggleAlbum: (state, action: PayloadAction<number>) => {
      const albumId = action.payload;
      if (state.selectedAlbums.includes(albumId)) {
        state.selectedAlbums = state.selectedAlbums.filter(
          (id) => id !== albumId,
        );
      } else {
        state.selectedAlbums.push(albumId);
      }
    },
    setSelectedAlbums: (state, action: PayloadAction<number[]>) => {
      state.selectedAlbums = action.payload;
    },
  },
});

export const { toggleAlbum, setSelectedAlbums } = albumsSlice.actions;

const albumsReducer = albumsSlice.reducer;
export default albumsReducer;
