import React, { useState } from 'react'
import { useVideo } from '../context/VideoContext';
import { NavLink } from 'react-router-dom';
import AddPlayListModal from './AddPlayListModal';

function AllPlaylists() {
    const { playlists,setplaylists } = useVideo();
    const [showAddPlaylistModal, setShowAddPlaylistModal] = useState(false);
    const DeletePlaylist=(name)=>{
        const tempPlaylist = playlists.filter(item => item.name !== name);
        setplaylists(tempPlaylist);
      }
  return (
    <div>
        <h1 className='font-bold text-3xl py-4'>All Playlists</h1>
        <div className='flex flex-wrap gap-4 items-center'>
        {playlists.map(item=>
        <div>
        <NavLink to={`/playlists/${item.name}`} className="w-[25%]">
            <div className='flex flex-col'>
                <img src="https://picsum.photos/309/174"/>
            </div>
            </NavLink>
                <div className='flex justify-between text-xl'>
                <p>{item.name}</p>
                <button onClick={()=>DeletePlaylist(item.name)}>X</button>
                </div>
        
        </div>
        )}
        <button className=' p-4 text-lg rounded-full h-fit bg-[#29b9f0ff] text-white' onClick={()=>setShowAddPlaylistModal(true)}>Add New Playlist</button>
        </div>
        {showAddPlaylistModal && <AddPlayListModal setShowAddPlaylistModal={setShowAddPlaylistModal} />}
    </div>
  )
}

export default AllPlaylists