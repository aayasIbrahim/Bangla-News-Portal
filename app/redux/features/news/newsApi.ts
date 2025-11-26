import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INews, INewsPayload, INewsUpdatePayload } from "@/types/news";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/news/" }),
  tagTypes: ["News"],

  endpoints: (builder) => ({
    // Get all news
    getNews: builder.query<INews[], string>({
      query: (category = "all") => `?category=${encodeURIComponent(category)}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map((item) => ({
                type: "News" as const,
                id: item._id,
              })),
              { type: "News", id: "LIST" },
            ]
          : [{ type: "News", id: "LIST" }],
    }),

    // Get single news
    getNewsById: builder.query<INews, string>({
      query: (id) => `${id}`,
      providesTags: (result, error, id) => [{ type: "News", id }],
    }),

    // Create news
    addNews: builder.mutation<INews, INewsPayload>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "News", id: "LIST" }],
    }),

    // Update news
    updateNews: builder.mutation<INews, INewsUpdatePayload>({
      query: ({ id, data }) => ({
        url: id,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "News", id }],
    }),

    // Delete news
    deleteNews: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: id,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "News", id },
        { type: "News", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery,
  useAddNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsApi;
