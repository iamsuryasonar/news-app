import { getTopHeadlinesApi } from '../utility';

export const fetchNews = async (category) => {
    let url = getTopHeadlinesApi(category, 'in')
    let response = await fetch(url)
    let result = await response.json();
    return result;
}

