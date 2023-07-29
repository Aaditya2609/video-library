import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useVideo } from '../context/VideoContext';
import { AiOutlineClockCircle, AiOutlineDelete } from 'react-icons/ai';

function SinglePlaylist() {
    const { category, playlists, setplaylists, watchLater, setWatchLater } = useVideo();
    const [watchLaterItems, setWatchLaterItems] = useState(new Set(watchLater.map(item => item._id)));
    const { currPlaylist } = useParams();
    const playlist = playlists?.find(item => item.name === currPlaylist)
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
    const HandleDeleteVideo = (item) => {
        const updatedVideos = playlist.videos.filter((video) => video._id !== item._id);
        const updatedPlaylist = { ...playlist, videos: updatedVideos };
        const updatedPlaylists = playlists.map((pl) =>
            pl.name === playlist.name ? updatedPlaylist : pl
        );
        setplaylists(updatedPlaylists);
    };

    return (
        <div className='w-full'>
            <h1 className='font-bold text-3xl py-4 w-full'>{playlist.name}</h1>
            <div className=' w-[100%] items-center justify-center'>
                <div className='flex flex-wrap gap-8 w-full'>
                {playlist.videos.map(item => {
                    const temp = category.find((items) => items.category === item.category);
                    return (
                        <div className='w-[25%] flex-col items-center justify-center' key={item._id}>
                            <button
                                className='absolute border-2 bg-white rounded-br-md px-1'
                                onClick={() => HandleWatchLater(item)}
                            >
                                <AiOutlineClockCircle
                                    className={`m-1 text-2xl ${watchLaterItems.has(item._id) ? 'text-[#29b9f0ff]' : ''}`}
                                />
                            </button>
                            <NavLink to={`/video/${item._id}`}>
                                <img src={item.thumbnail} className='w-full' alt={item.title} />
                                <div className='flex mt-4 gap-4'>
                                    <img className='h-10 w-10 rounded-full' src={temp.thumbnail} alt={temp.category} />
                                    <div>
                                        <p className='font-[500] text-md'>{item.title}</p>
                                        <p className='font-[500] text-md text-[rgba(0,0,0,0.7)]'>{item.category}</p>
                                        <p className='font-[500] text-md text-[rgba(0,0,0,0.5)]'>{item.views} views | {item.creator}</p>

                                    </div>
                                </div>
                            </NavLink>
                            <button
                                className='w-fit flex border-2 rounded-xl px-4 py-2 mt-2 text-2xl border-none m-auto text-center gap-4 bg-[#29b9f0ff] text-white items-center justify-center'
                                onClick={() => HandleDeleteVideo(item)}
                            >
                                <AiOutlineDelete /> Delete Video
                            </button>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default SinglePlaylist