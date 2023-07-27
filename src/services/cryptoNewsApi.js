import { createApi ,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4cf05a84c9mshb7b2a16ad891b53p1f4fb4jsn385ce31fe1c8',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest =(url) => ({ url ,headers: cryptoNewsHeaders });
export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder ) => ({
        getCryptoNews : builder.query({
            query : ({ newsCategory , count })=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
     })
}) ;
export const  {
    useGetCryptoNewsQuery,
}= cryptoNewsApi ;