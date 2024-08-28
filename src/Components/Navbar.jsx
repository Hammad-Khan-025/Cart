import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from './Context';

const Navbar = () => {

  const {amount} = useGlobalContext()
  return (
    <nav className='flex justify-around items-center h-20 bg-blue-500 text-white sticky top-0 right-0 left-0'>
      <h1 className='text-2xl sm:text-3xl tracking-wider font-semibold'>UseReducer</h1>
      <div className='relative'>
        <FaCartPlus className='text-2xl sm:text-3xl'/>
        <button className='absolute -top-5 -right-5 bg-blue-200 w-7 sm:w-8 h-7 sm:h-8 rounded-full text-black font-bold cursor-default'>{amount}</button>
      </div>
    </nav>
  )
}

export default Navbar
