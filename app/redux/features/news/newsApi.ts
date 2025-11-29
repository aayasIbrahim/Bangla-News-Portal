import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INews, INewsPayload, INewsUpdatePayload ,NewsApiResponse} from "@/types/news";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/news/" }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    // Get all news
    getNews: builder.query<NewsApiResponse, string>({
      // <রেসপন্স টাইপ, আর্গুমেন্ট টাইপ>
      query: (category = "all") => {
        // category প্যারামিটার ব্যবহার করে query স্ট্রিং তৈরি
        return {
          url: `?category=${encodeURIComponent(category)}`,
          method: "GET",
        };
      },
      // API থেকে আসা ডেটার উপর ভিত্তি করে ট্যাগ সরবরাহ করা
      providesTags: ["News"],
    }),

    // Get single news
    getNewsById: builder.query<INews, string>({
      query: (id) => `${id}`,
      providesTags: ["News"],
    }),

    // Create news
    addNews: builder.mutation<INews, INewsPayload>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["News"],
    }),

    // Update news
    updateNews: builder.mutation<INews, INewsUpdatePayload>({
      query: ({ id, data }) => ({
        url: id,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["News"], // 🔑 UI auto refresh হবে
    }),

    // Delete news
    deleteNews: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: id,
        method: "DELETE",
      }),
      invalidatesTags: ["News"], // 🔑 UI auto refresh হবে
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
