import { formatDate } from '../../utility'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Transition } from 'react-transition-group';
import { useState } from 'react';

function Article({ article, index, arr, setCategory }) {
    const [menu, setMenu] = useState(false);

    return <div className='relative w-full h-svh bg-purple-900 text-white flex'>
        {article?.urlToImage && <img className='w-full h-full object-cover' src={article.urlToImage} alt={`Image of title ${article.title}`}></img>}
        <div className=' absolute top-0 left-0 right-0 bg-black bg-opacity-[6%] backdrop-blur-sm flex flex-row justify-between items-center py-2 px-4'>
            <div className='flex flex-col gap-1'>
                <p className='font-bold text-xl'>{article.source.name}</p>
                <div className=' flex flex-row gap-1'>
                    {/* {[...Array(arr.length)].map((_, i) => {
                        return <div key={i} style={{
                            opacity: index === i ? '1' : '0.5'
                        }} className='w-2 h-2 rounded-full bg-white'></div>
                    })} */}
                </div>
            </div>
            <div className=' flex flex-row gap-2'>
                {/* <img src={reloadIcon} className="w-5 h-5" alt="reload"></img> */}
                <FontAwesomeIcon onClick={() => { setMenu(!menu) }} icon={faEllipsisVertical} className="w-5 h-5" />
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
        {
            <Transition in={menu} timeout={100}>
                {(state) => (
                    <div className={`fixed  right-5 bottom-0 left-5 rounded-xl flex justify-center items-center transition-transform transform ease-in-out duration-700 ${state === 'entered' ? 'translate-y-0 ' : 'translate-y-full '}`}>
                        <div className='bg-white max-w-xl w-full min-h-[400px] rounded-t-lg px-6 py-8 flex flex-col gap-4'>
                            <p className='text-cyan-800 text-2xl font-sans font-thin'>Select category</p>
                            <p className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-lg' onClick={() => { setCategory('business'); setMenu(false) }}>business</p>
                            <p className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-lg' onClick={() => { setCategory('entertainment'); setMenu(false) }}>entertainment</p>
                            <p className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-lg' onClick={() => { setCategory('general'); setMenu(false) }}>general</p>
                            <p className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-lg' onClick={() => { setCategory('health'); setMenu(false) }}>health</p>
                            <p className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-lg' onClick={() => { setCategory('science'); setMenu(false) }}>science</p>
                            <p className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-lg' onClick={() => { setCategory('sports'); setMenu(false) }}>sports</p>
                            <p className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded-lg' onClick={() => { setCategory('technology'); setMenu(false) }}>technology</p>
                        </div>
                    </div>
                )}
            </Transition >
        }
    </div >
}

export default Article