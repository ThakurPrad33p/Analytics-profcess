import React from 'react'
import logo from './logo.jpg';

const Header = () => {
  return (
    <div className='flex justify-between items-center  p-4 bg-slate-900'>
        <div className='flex items-center gap-1'>
            <img className='w-10 ' src={logo} alt="logo" />
            <h1 className='text-white font-bold text-2xl cursor-pointer'>metafied</h1>
        </div>
        <div className='rounded-full cursor-pointer bg-pink-500'>
          <h1 className='font-bold text-2xl text-white  px-4 py-2'>P</h1>
        </div>
    </div>
  )
}

export default Header