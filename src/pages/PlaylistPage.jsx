import React from 'react'
import Nav from '../components/Nav'
import SinglePlaylist from '../components/SinglePlaylist'

function PlaylistPage() {
  return (
    <div className='flex min-h-full gap-8'>
        <Nav/>
        <SinglePlaylist/>
    </div>
  )
}

export default PlaylistPage