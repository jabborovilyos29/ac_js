import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhotosState } from "./types";

const initialState: PhotosState = {
  search: "",
  currentPage: 1,
  limit: 12,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
});

export const { setSearch, setCurrentPage, setLimit } = photosSlice.actions;

export default photosSlice.reducer;
