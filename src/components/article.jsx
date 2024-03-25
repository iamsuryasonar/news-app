import { formatDate } from '../../utility'
import reloadIcon from '../assets/reload.svg'


function Article({ article, index, arr }) {
    return <div className='relative w-full h-svh bg-purple-900 text-white flex'>
        {article?.urlToImage && <img className='w-full h-full object-cover' src={article.urlToImage} alt={`Image of title ${article.title}`}></img>}
        <div className=' absolute top-0 left-0 right-0 bg-black bg-opacity-[6%] backdrop-blur-sm flex flex-row justify-between items-center py-2 px-4'>
            <div className='flex flex-col gap-1'>
                <p className='font-bold text-lg'>{article.source.name}</p>
                <div className=' flex flex-row gap-1'>
                    {[...Array(arr.length)].map((_, i) => {
                        return <div key={i} style={{
                            opacity: index === i ? '1' : '0.5'
                        }} className='w-2 h-2 rounded-full bg-white'></div>
                    })}
                </div>
            </div>
            <div className=' flex flex-row gap-2'>
                {/* <img src={reloadIcon} className="w-5 h-5" alt="reload"></img>
                <img src={ellipsisIcon} className="w-5 h-5" alt="menu"></img> */}
            </div>
        </div>
        <a href={article.url}>
            <div className='absolute bottom-4 left-4 right-4 bg-black bg-opacity-[15%] backdrop-blur-sm flex flex-row justify-between items-center p-3 rounded-lg'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] font-light'> {article.author === null ? 'UNKNOWN' : article.author}</p>
                    <div className='grid grid-cols-12'>
                        <div className='bg-white w-[2px] h-full'></div>
                        <p className='text-[14px] col-span-11'>{article.title}</p>
                    </div>
                    <p className='text-[11px] font-thin'>{formatDate(article.publishedAt)}</p>
                </div>
            </div>
        </a>
    </div>
}

export default Article