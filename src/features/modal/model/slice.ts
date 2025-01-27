import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "./types";

const initialState: ModalState = {
  isOpen: false,
  id: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<number>) {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.id = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
const modalReducer = modalSlice.reducer;
export default modalReducer;
