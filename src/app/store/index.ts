import { albumsReducer, filtersReducer } from "@features/index";
import { configureStore } from "@reduxjs/toolkit";
import { api, apiMiddleware } from "@shared/api/api";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    albums: albumsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
