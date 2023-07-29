import React, { useState } from 'react';
import { useVideo } from '../context/VideoContext';

function PlaylistModal({ setShowPlaylistModal, Video }) {
  const { playlists,setplaylists } = useVideo();
  const [playlistname, setPlaylistName] = useState();

  const handleAddPlaylist = () => {
    const temp={name:playlistname,videos:[Video]}
    const temp2 = [...playlists, temp];
    setplaylists(temp2)
    setShowPlaylistModal(false)
  };
  const addToPlaylist = (name) => {
    const tempPlaylist = playlists.find(item => item.name === name);
    if (tempPlaylist) {
      const updatedVideos = [...tempPlaylist.videos, Video];
      const updatedPlaylists = playlists.map(item =>
        item.name === name ? { ...item, videos: updatedVideos } : item
      );
      setplaylists(updatedPlaylists);
      setShowPlaylistModal(false)
    }
  };
  const DeletePlaylist=(name)=>{
    const tempPlaylist = playlists.filter(item => item.name !== name);
    setplaylists(tempPlaylist);
  }
  

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
      <div className="bg-white p-4">
        <button
          className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
          onClick={() => setShowPlaylistModal(false)}
        >
          X
        </button>
        <div className="bg-white flex flex-col items-center p-2 justify-center">
          <input
            className="border-2 w-full border-black rounded p-2"
            placeholder="New Playlist Name"
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <button
            className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
            onClick={handleAddPlaylist} 
          >
            Create Playlist and Add
          </button>
        </div>
        <hr class="border-2 mt-2 border-[rgba(0,0,0,0.6)] " />
        <h1 className='font-bold text-xl'>Add to existing playlists</h1>
        {playlists.map(item=><div className='flex justify-between' ><button onClick={()=>addToPlaylist(item.name)}>{item.name}</button> <button onClick={()=>DeletePlaylist(item.name)}>x</button></div>)}
      </div>
    </div>
  );
}

export default PlaylistModal;
