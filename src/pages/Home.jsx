import { useEffect, useState } from 'react'
import { fetchNews } from '../../api/index'
import reloadIcon from '../assets/reload.svg'
import ellipsisIcon from '../assets/ellipsis.svg'

function Home() {
    const [news, setNews] = useState();

    async function getNews() {
        const res = await fetchNews();
        setNews(res);
    }

    useEffect(() => {
        getNews()
    }, [])

    return <div className='bg-slate-900 min-h-svh w-full flex flex-row justify-center items-center'>
        <div className='relative bg-slate-100 w-11/12 h-[700px]'>
            <div className=' absolute top-0 left-0 right-0   flex flex-row justify-between items-center p-3'>
                <div className='flex flex-col gap-1'>
                    <p>TECHCRUNCH</p>
                    <div className=''>
                        <div className='w-2 h-2 rounded-full bg-black'></div>
                    </div>
                </div>
                <div className=' flex flex-row gap-2'>
                    <img src={reloadIcon} className="w-5 h-5" alt="reload"></img>
                    <img src={ellipsisIcon} className="w-5 h-5" alt="menu"></img>
                </div>
            </div>
            {console.log(news)}
            <div className='absolute bottom-6 left-4 right-4 backdrop-blur-sm  flex flex-row justify-between items-center p-3'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] font-light'> TECHCRUNCH</p>
                    <div className='grid grid-cols-12'>
                        <div className='bg-black w-[2px] h-full'></div>
                        <p className='text-[14px] col-span-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, atque ratione. </p>
                    </div>
                    <p className='text-[11px] font-thin'>16 dec 2020</p>
                </div>
            </div>
        </div>
    </div>

}

export default Home; 