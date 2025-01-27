import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumsState } from "./types";

const initialState: AlbumsState = {
  selectedAlbums: [],
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    toggleAlbum: (state, action: PayloadAction<number[]>) => {
      const albumIds = action.payload;
      state.selectedAlbums = albumIds;
    },
    setSelectedAlbums: (state, action: PayloadAction<number[]>) => {
      state.selectedAlbums = action.payload;
    },
  },
});

export const { toggleAlbum, setSelectedAlbums } = albumsSlice.actions;

const albumsReducer = albumsSlice.reducer;
export default albumsReducer;
