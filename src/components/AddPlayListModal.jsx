import React, { useState } from 'react'
import { useVideo } from '../context/VideoContext';

function AddPlayListModal({setShowAddPlaylistModal}) {
    const { playlists,setplaylists } = useVideo();
    const [playlistname,setPlaylistName]=useState("")
    const handleAddPlaylist=()=>{
        const temp={name:playlistname,videos:[]}
        const temp2 = [...playlists, temp];
        setplaylists(temp2)
        setShowAddPlaylistModal(false)
    }
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
                <div className="bg-white p-4">
                    <button
                        className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
                        onClick={() => setShowAddPlaylistModal(false)}
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
                            onClick={()=>handleAddPlaylist()}
                        >
                            Create Playlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPlayListModal