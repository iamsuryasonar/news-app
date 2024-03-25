export const api_key = import.meta.env.VITE_API_KEY;

export const getTopHeadlinesApi = function (country) {
    return `https://newsapi.org/v2/top-headlines?country=${country}`
}