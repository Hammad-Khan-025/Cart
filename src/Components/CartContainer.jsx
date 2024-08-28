import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './Context'

const CartContainer = () => {

  const {total, cart, clearCart} = useGlobalContext()

  if(cart.length == 0){
    return (
      <section className="flex flex-col items-center bg-slate-200 min-h-[calc(100vh-80px)] pt-10 tracking-wider">
        <h1 className="uppercase font-medium text-2xl sm:text-3xl text-center mb-5">Your Bag</h1>
        <p className="text-gray-600 font-medium text-lg">is currently empty</p>
      </section>
    )
  }

  return (
    <section className='flex justify-center items-center min-h-[calc(100vh-80px)] bg-slate-200 tracking-wider'>
        <div className='py-10'>
            <h1 className='uppercase font-medium text-2xl sm:text-3xl text-center mb-5'>Your Bag</h1>
            <CartItem/>
            <div className='w-full h-[2px] bg-gray-400 rounded-full my-5'></div>
            <div className='flex justify-between pe-10 ps-4'>
              <h1 className='font-medium text-lg sm:text-2xl'>Total</h1>
              <p className='text- bg-blue-500 py-1 px-2 rounded-lg text-white'>${total}</p>
            </div>
            <div className='text-center mt-5 sm:mt-3'>
              <button className='bg-blue-300 py-1 px-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300 active:bg-blue-900' onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    </section>
  )
}

export default CartContainer
