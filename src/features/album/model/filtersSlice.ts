import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "./types";

const initialState: FiltersState = {
  search: "",
  selectedTags: [],
  currentPage: 1,
  limit: 10,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    toggleTag(state, action: PayloadAction<number>) {
      const tag = action.payload;
      if (state.selectedTags.includes(tag)) {
        state.selectedTags = state.selectedTags.filter((id) => id !== tag);
      } else {
        state.selectedTags.push(tag);
      }
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    resetFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setSearch, toggleTag, setCurrentPage, setLimit, resetFilters } =
  filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;

export default filtersReducer;
