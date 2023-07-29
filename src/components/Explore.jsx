import React, { useEffect, useState } from 'react';
import { useVideo } from '../context/VideoContext';
import { NavLink } from 'react-router-dom';
import { AiOutlineClockCircle } from 'react-icons/ai';

function Explore() {
  const [key, setKey] = useState('');
  const { allVideos, category, watchLater, setWatchLater } = useVideo();
  const [filteredVideos, setFilteredVideos] = useState(allVideos);
  const [watchLaterItems, setWatchLaterItems] = useState(new Set(watchLater.map(item => item._id)));

  useEffect(() => {
    const temp = allVideos.filter(
      (item) =>
        item.title.toLowerCase().includes(key.toLowerCase())
    );
    setFilteredVideos(temp);
  }, [key, allVideos]);

  useEffect(() => {
    const localtemp = localStorage.getItem('watchlater');
    const parsedData = JSON.parse(localtemp) ?? [];
    setWatchLater(parsedData);
  }, [setWatchLater]);

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
    <div className='flex flex-col w-full items-center'>
      <input
        placeholder='Search Video By Title'
        className='p-1 rounded-xl my-4 text-2xl text-black w-[80%] border-2 border-black px-4'
        onChange={(e) => setKey(e.target.value)}
      />
      <div className='flex flex-wrap gap-8 w-full items-center justify-center'>
        {filteredVideos.map((item) => {
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
  );
}

export default Explore;
