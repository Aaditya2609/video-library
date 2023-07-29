import React from 'react'
import Nav from '../components/Nav'
import Category from '../components/Category'

function CategoryPage() {
  return (
    <div className='flex min-h-full gap-8'>
        <Nav/>
        <Category/>
    </div>
  )
}

export default CategoryPage