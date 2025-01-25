import { api } from "@shared/index";

export const albumApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query({
      query: () => "albums",
    }),
  }),
});

export const { useGetAlbumsQuery } = albumApi;
