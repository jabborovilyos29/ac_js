import { api } from "@shared/index";

export const photoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPhotos: build.query({
      query: (albumId) => `albums/${albumId}/photos`,
    }),
  }),
});

export const { useGetPhotosQuery } = photoApi;
