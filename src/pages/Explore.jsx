import React from 'react'
import Nav from '../components/Nav'
import Explore from '../components/Explore'

function ExplorePage() {
  return (
    <div className='flex min-h-full gap-8'>
    <Nav/>
    <Explore/>
    </div>
  )
}

export default ExplorePage