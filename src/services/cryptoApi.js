import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": `${process.env.REACT_APP_COINAPI_KEY}`,
  "X-RapidAPI-Host": `${process.env.REACT_APP_COINAPI_HOST}`,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_COINAPI_URL}`,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({ query: () => createRequest("/coins") }),
    getCryptoDetails: builder.query({
      query: (coinID) => createRequest(`/coin/${coinID}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinID, timeperiod }) =>
        createRequest(`coin/${coinID}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Key": "5d033e6a54mshb5a21c086036383p1de9efjsn229439d8409e",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };
