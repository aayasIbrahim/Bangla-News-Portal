import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Videos"],

  endpoints: (builder) => ({

    // GET VIDEOS
    getVideos: builder.query({
      query: () => "/video",
      providesTags: ["Videos"],
    }),

    // ADD VIDEO
    addVideo: builder.mutation({
      query: (body) => ({
        url: "/video",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Videos"],
    }),

    // DELETE VIDEO
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/video?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),

  }),
});

export const {
  useGetVideosQuery,
  useAddVideoMutation,
  useDeleteVideoMutation,
} = videoApi;
