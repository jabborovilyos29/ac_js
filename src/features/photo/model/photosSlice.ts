import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhotosState } from "./types";

const initialState: PhotosState = {
  search: "",
  photos: {
    isLoading: false,
    data: [],
  },
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    loadingSwitcher(state, action: PayloadAction<boolean>) {
      state.photos.isLoading = action.payload;
    },
    setPhotos(state, action: PayloadAction<any[]>) {
      console.log(action.payload);
      state.photos.data = action.payload;
    },
  },
});

export const { setSearch, setPhotos, loadingSwitcher } = photosSlice.actions;

export default photosSlice.reducer;
