import React from 'react'
import Nav from '../components/Nav'
import SingleVideo from '../components/SingleVideo'
import MoreVideos from '../components/MoreVideos'

function VideoPage() {
  return (
    <div className='flex min-h-full gap-8'>
        <Nav/>
        <SingleVideo/>
        <MoreVideos/>
    </div>
  )
}

export default VideoPage