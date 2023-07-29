import React from 'react'
import Nav from '../components/Nav'
import WatchLater from '../components/WatchLater'

function WatchLaterPage() {
  return (
    <div className='flex min-h-full gap-8'>
        <Nav/>
        <WatchLater/>
    </div>

  )
}

export default WatchLaterPage