import { api } from "@shared/index";

export const photoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPhotos: build.query<any, number>({
      query: (albumId) => `albums/${albumId}/photos`,
    }),
    getPhotoDetails: build.query<any, string>({
      query: (id: string) => `photos/${id}`,
    }),
  }),
});

export const { useGetPhotosQuery, useGetPhotoDetailsQuery } = photoApi;
