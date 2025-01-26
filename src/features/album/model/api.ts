import { api } from "@shared/index";

export const albumApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<any, void>({
      query: () => "albums",
    }),
  }),
});

export const { useGetAlbumsQuery } = albumApi;
