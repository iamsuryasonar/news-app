import { useEffect, useState } from 'react'
import { fetchNews } from '../../api/index'
import ArticlesCarousal from '../components/articles-carousal'

function Home() {
    const [news, setNews] = useState();
    const [isLoading, setLoading] = useState(false);
    const [category, setCategory] = useState('technology');

    async function getNews(category) {
        setLoading(true)
        const res = await fetchNews(category);
        setLoading(false)
        setNews(res);
    }

    useEffect(() => {
        getNews(category)
    }, [category])

    return <div className='bg-slate-100'>
        <div className='min-h-svh w-full max-w-xl m-auto flex flex-col justify-center items-center gap-2'>
            <ArticlesCarousal data={news?.articles} isLoading={isLoading} setCategory={setCategory} />
        </div>
    </div>
}

export default Home;


