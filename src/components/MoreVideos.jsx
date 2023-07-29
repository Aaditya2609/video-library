import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { useVideo } from '../context/VideoContext';

function MoreVideos() {
    const { currVideo } = useParams();
    const { allVideos } = useVideo();
    const more = allVideos.filter(item => item._id != currVideo)
    return (
        <div className='w-[30%]'>
            <h1 className='text-3xl my-2 font-bold'>More Videos:</h1>
            <div className="flex flex-col gap-4" >
            {more.map(item => {
                return (
                    <NavLink to={`/video/${item._id}`}>
                    <div className='flex gap-4'>
                        <div className=''>
                            <img className="w-full"src={item.thumbnail}/>
                        </div>
                        <div className='w-1/2'>
                            <p className='mt-2 font-semibold'>{item.title}</p>
                            <p className=' text-[#29b9f0ff]'>{item.creator}</p>
                        </div>
                    </div>
                    </NavLink>
                )
            })}
            </div>
            
        </div>
    )
}

export default MoreVideos