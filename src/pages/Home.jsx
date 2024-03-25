import { useContext } from 'react'
import ArticlesCarousal from '../components/articles-carousal'
import { AppContext } from '../App'

function Home() {
    const { news } = useContext(AppContext);

    return <div className='bg-slate-100'>
        <div className='min-h-svh w-full max-w-xl m-auto flex flex-col justify-center items-center gap-2'>
            <ArticlesCarousal data={news?.articles} />
        </div>
    </div>
}

export default Home;


