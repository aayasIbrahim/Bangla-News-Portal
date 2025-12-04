import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Ad } from "@/types/ads";



export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/ads" }),
  tagTypes: ["Ads"],
  endpoints: (builder) => ({
    // GET all ads
    getAds: builder.query<Ad[], void>({
      query: () => "",
      providesTags: ["Ads"],
    }),
    // ADD new ad
    addAd: builder.mutation<Ad, Partial<Ad>>({
      query: (ad) => ({
        url: "",
        method: "POST",
        body: ad,
      }),
      invalidatesTags: ["Ads"],
    }),
    // UPDATE ad
    updateAd: builder.mutation<Ad, { id: string; data: Partial<Ad> }>({
      query: ({ id, data }) => ({
        url: `?id=${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Ads"],
    }),
    // DELETE ad
    deleteAd: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Ads"],
    }),
  }),
});

export const { useGetAdsQuery, useAddAdMutation, useUpdateAdMutation, useDeleteAdMutation } =
  adsApi;
