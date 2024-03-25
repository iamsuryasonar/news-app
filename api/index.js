import { api_key, getTopHeadlinesApi } from '../utility';

export const fetchNews = async () => {
    let url = getTopHeadlinesApi('in')
    let response = await fetch(url, {
        headers: {
            "Authorization": api_key,
        }
    })
    let result = await response.json();
    return result;
}

