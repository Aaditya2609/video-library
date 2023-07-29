import React from 'react'
import { AiOutlineHome, AiOutlineCompass, AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom'

function Nav() {
    const location = useLocation();
    return (
        <div className='flex flex-col min-h-screen  items-center pt-12 w-[20%]'>
            <NavLink to="/" className={`flex items-center justify-center ${location.pathname === '/' ? 'text-[#29b9f0ff]' : ''
                }`}>
                <AiOutlineHome className=" m-3 text-3xl" /> <span className='text-2xl font-[500]'>Home</span>
            </NavLink >
            <NavLink to="/explore " className={`flex items-center justify-center ${location.pathname === '/explore' ? 'text-[#29b9f0ff]' : ''
                }`}>
                <AiOutlineCompass className=" m-3 text-3xl" /><span className='text-2xl font-[500]'>Explore</span>
            </NavLink>
            <NavLink to="/playlists" className={`flex items-center justify-center ${location.pathname === '/playlists' ? 'text-[#29b9f0ff]' : ''
                }`}>
                <MdOutlinePlaylistAdd className=" m-3 text-3xl" />
                <span className='text-2xl font-[500]'>Playlists</span>
            </NavLink>
            <NavLink to="/watchlater" className={`flex items-center justify-center ${location.pathname === '/watchlater' ? 'text-[#29b9f0ff]' : ''
                }`}>
                <AiOutlineClockCircle className="m-3 text-3xl" />
                <span className='text-2xl font-[500]'> Watch Later</span>
            </NavLink>
        </div>
    )
}

export default Nav