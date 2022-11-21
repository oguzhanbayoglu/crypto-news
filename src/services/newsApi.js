import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": `${process.env.REACT_APP_CNEWSAPI_KEY}`,
  "X-RapidAPI-Host": `${process.env.REACT_APP_CNEWSAPI_HOST}`,
};

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_CNEWSAPI_URL}`,
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '5d033e6a54mshb5a21c086036383p1de9efjsn229439d8409e',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };
