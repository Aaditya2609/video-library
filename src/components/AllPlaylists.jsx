import React from 'react'
import { useVideo } from '../context/VideoContext';

function AllPlaylists() {
    const { playlists,setplaylists } = useVideo();
  return (
    <div>
        <h1>All Playlists</h1>
    </div>
  )
}

export default AllPlaylists