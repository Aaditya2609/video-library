import React from 'react'
import { useVideo } from '../context/VideoContext'
import { NavLink } from 'react-router-dom';

function HomeCategories() {
    const{category}=useVideo();
  return (
    <div className='w-full'>
        <h1 className='font-bold text-3xl py-4'>Categories</h1>
        <div className='flex flex-wrap gap-12'>
            {category.map(item=>{
                return(
                    <NavLink to={`/category/${item.category}`}>
                    <img src={item.thumbnail}/> 
                    <h2 className='font-bold text-lg py-2'>{item.category}</h2>
                    </NavLink>
                )
            })}

        </div>
    </div>
  )
}

export default HomeCategories