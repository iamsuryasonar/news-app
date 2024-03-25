import { getTopHeadlinesApi } from '../utility';

export const fetchNews = async () => {
    let url = getTopHeadlinesApi('in')
    let response = await fetch(url)
    let result = await response.json();
    return result;
}

