import { albumsReducer, modalReducer, photosReducer } from "@features/index";
import { configureStore } from "@reduxjs/toolkit";
import { api, apiMiddleware } from "@shared/api/api";

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    photos: photosReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
