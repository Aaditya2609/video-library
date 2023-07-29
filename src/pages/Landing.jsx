import React from 'react'
import Nav from '../components/Nav'
import HomeCategories from '../components/HomeCategories'

function Landing() {
  return (
    <div className='flex min-h-full gap-8'>
       <Nav/>
    <HomeCategories/>
    </div>
  )
}

export default Landing