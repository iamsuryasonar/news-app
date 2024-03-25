import { useEffect, useState } from 'react'
import { fetchNews } from '../../api/index'
import ArticlesCarousal from '../components/articles-carousal'

function Home() {
    const [news, setNews] = useState();

    async function getNews() {
        const res = await fetchNews();
        setNews(res);
    }

    useEffect(() => {
        getNews()
    }, [])

    return <div className='bg-gray-900'>
        <div className='min-h-svh w-full max-w-xl m-auto flex flex-col justify-center items-center gap-2'>
            <ArticlesCarousal data={news?.articles} />
        </div>
    </div>
}

export default Home;


