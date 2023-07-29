import React, { useEffect } from 'react'
import { useVideo } from '../context/VideoContext';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function WatchLater() {
    const {  category, watchLater,setWatchLater } = useVideo();
    useEffect(() => {
        localStorage.setItem('watchlater', JSON.stringify(watchLater));
      }, [watchLater]);
    
      const HandleWatchLater = (item) => {
        if (watchLater.includes(item)) {
          const temp = watchLater.filter((items) => items !== item);
          setWatchLater(temp);
        } else {
          const temp = [...watchLater, item];
          setWatchLater(temp);
        }
      };
    
  return (
    <div className='w-full'>
        <h1 className='font-bold text-3xl py-4'>Watch Later</h1>
        <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {watchLater.map((item) => {
          const temp = category.find((items) => items.category === item.category);
          return (
            <div className='w-[25%] flex flex-col' key={item._id}>
              <button
                className='absolute border-2 bg-white rounded-br-md px-1'
                onClick={() => HandleWatchLater(item)}
              >
                <AiOutlineClockCircle
                  className={`m-1 text-2xl ${
                    watchLater.includes(item) ? 'text-[#29b9f0ff]' : ''
                  }`}
                />
              </button>
              <NavLink to={`/video/${item._id}`}>
                <img src={item.thumbnail} alt={item.title} />
                <div className='flex mt-4 gap-4'>
                  <img className='h-10 w-10 rounded-full' src={temp.thumbnail} alt={temp.category} />
                  <div>
                    <p className='font-[500] text-md'>{item.title}</p>
                    <p className='font-[500] text-md text-[rgba(0,0,0,0.7)]'>{item.category}</p>
                    <p className='font-[500] text-md text-[rgba(0,0,0,0.5)]'>{item.views} views | {item.creator}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default WatchLater