import React from 'react'
import logo from '../logo.png';
import { Link, NavLink } from 'react-router-dom'
import { ImSearch } from 'react-icons/im';

export const Navbar = () => {
  return (
 
        <nav className=' flex items-center justify-between bg-black h-20 text-white p-4 box-border'>
        <img src={logo} alt="" className=' h-20'/>
        <ul className='flex w-full mx-6 '>
                <NavLink className=' m-4' to="/home">Movies</NavLink>
               <NavLink className=' m-4' to="/topRated">Top rated</NavLink>
                <NavLink className=' m-4' to="/recently">Recently Added</NavLink>
                <NavLink className=' m-4' to="/myList">My List</NavLink>
   
            
             {/* <li > */}
             {/* </li> */}
        </ul>
                <ImSearch className=' text-2xl  hover:text-gray-400 cursor-pointer '/>
        </nav>
   
  )
}
