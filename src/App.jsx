import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { useGlobalContext } from './Components/Context'
import { BiLoaderCircle  } from "react-icons/bi";

function App() {

  const {loading} = useGlobalContext()

  if(loading){
    return (
      <section className='flex justify-center  gap-2 pt-10 font-semibold text-xl sm:text-2xl  text-gray-600 tracking-wider bg-slate-200 h-screen'>
        <BiLoaderCircle  className='animate-spin mt-[5px]'/>
        <h1>Loading</h1>
      </section>
    )
  }

  return (
    <>
      <Navbar/>
      <CartContainer/>
    </>
  )
}

export default App
