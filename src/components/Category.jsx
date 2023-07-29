import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useVideo } from '../context/VideoContext';
import { AiOutlineClockCircle } from 'react-icons/ai';

function Category() {
    const {currCategory}=useParams()
    const { allVideos, category,watchLater,setWatchLater } = useVideo();
    const categoryVideos=allVideos.filter(item=>item.category===currCategory)
    const [watchLaterItems, setWatchLaterItems] = useState(new Set(watchLater.map(item => item._id)));
    useEffect(() => {
        setWatchLaterItems(new Set(watchLater.map(item => item._id)));
        localStorage.setItem('watchlater', JSON.stringify(watchLater));
      }, [watchLater]);
    const HandleWatchLater = (item) => {
        if (watchLaterItems.has(item._id)) {
          const temp = new Set(watchLaterItems);
          temp.delete(item._id);
          setWatchLaterItems(temp);
          setWatchLater(prevWatchLater => prevWatchLater.filter(watchItem => watchItem._id !== item._id));
        } else {
          setWatchLaterItems(prevWatchLater => new Set(prevWatchLater).add(item._id));
          setWatchLater(prevWatchLater => [...prevWatchLater, item]);
        }
      };
  return (
    <div>
        <div className='w-full'>
        <h1 className='font-bold text-3xl py-4'>{currCategory}</h1>
        <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {categoryVideos.map((item) => {
          const temp = category.find((items) => items.category === item.category);
          return (
            <div className='w-[25%] flex flex-col' key={item._id}>
              <button
                className='absolute border-2 bg-white rounded-br-md px-1'
                onClick={() => HandleWatchLater(item)}
              >
                <AiOutlineClockCircle
                  className={`m-1 text-2xl ${watchLaterItems.has(item._id) ? 'text-[#29b9f0ff]' : ''}`}
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
    </div>
  )
}

export default Category