import { api } from "@shared/index";
import { IAlbum } from "./types";

export const albumApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<IAlbum[], void>({
      query: () => "albums",
    }),
  }),
});

export const { useGetAlbumsQuery } = albumApi;
