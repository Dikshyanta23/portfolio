import React from 'react'
import {links} from '../data'
const Navbar = () => {
  return (
    <nav className='bg-violet-200'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
            Web <span className='text-violet-600'>Developer</span>
        </h2>
        <div className='flex gap-x-6 '>
        {links.map((link)=> {
           const {id, href, text} = link;
           return(
            <a href={href} key = {id} className='capitalize text-lg tracking-wide hover:text-violet-600 hover:text-xl duration-300' >{text}</a>
           ) 
        })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
