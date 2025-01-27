import { api } from "@shared/index";
import { IPhoto } from "./types";

export const photoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPhotos: build.query<IPhoto[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
    }),
    getPhotoDetails: build.query<IPhoto, string>({
      query: (id: string) => `photos/${id}`,
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useLazyGetPhotosQuery,
  useGetPhotoDetailsQuery,
} = photoApi;
