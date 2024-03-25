export const api_key = import.meta.env.VITE_API_KEY;

export const getTopHeadlinesApi = (country) => {
    return `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`
}

export const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const formattedDate = new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit',
        // timeZone: 'UTC'
    }).format(date);

    return formattedDate
}