import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RAPID_API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPID_API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const BASEURL = import.meta.env.VITE_ARTICLE_SUMMARIZER_BASEURL;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", RAPID_API_KEY);
      headers.set("X-RapidAPI-Host", RAPID_API_HOST);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=7`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
