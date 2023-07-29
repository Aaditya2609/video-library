import React from 'react'
import Nav from '../components/Nav'
import AllPlaylists from '../components/AllPlaylists'

function PlaylistsPage() {
  return (
    <div className='flex min-h-full gap-8'>
        <Nav/>
        <AllPlaylists/>
    </div>
  )
}

export default PlaylistsPage