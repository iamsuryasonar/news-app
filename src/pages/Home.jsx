import { useEffect, useState } from 'react'
import { fetchNews } from '../../api/index'
import ArticlesCarousal from '../components/articles-carousal'

function Home() {
    const [news, setNews] = useState();
    const [isLoading, setLoading] = useState(false);

    async function getNews() {
        setLoading(true)
        const res = await fetchNews();
        setLoading(false)
        setNews(res);
    }

    useEffect(() => {
        getNews()
    }, [])

    return <div className='bg-slate-100'>
        <div className='min-h-svh w-full max-w-xl m-auto flex flex-col justify-center items-center gap-2'>
            <ArticlesCarousal data={news?.articles} isLoading={isLoading} />
        </div>
    </div>
}

export default Home;


