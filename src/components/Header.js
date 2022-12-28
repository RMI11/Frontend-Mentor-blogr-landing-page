import React from 'react'
import img from '../assets/desktop/image-header.jpg'
import logo from '../assets/logo.svg'
import arrow from '../assets/icon-arrow-down.svg'
const Header = () => {
  return (
    <div className='header w-full h-[100vh] overflow-hidden' >
        

        <div className='flex justify-between items-center absolute top-0 w-[100%] mx-4'>
          <img src={logo} />

          <ul className='flex justify-between items-center w-[100%] xs:w-[50%] md:w-[30%] py-4 mx-8'>
            <li className='hover:bg-white rounded-full p-2'><a href='#'>About</a></li>
            <li className='hover:bg-white rounded-full p-2'><a href='#'>Services</a></li>
            <li className='hover:bg-white rounded-full p-2'><a href='#'>Projects</a></li>
            <li className='bg-white rounded-full p-4 hover:bg-black hover:text-white'><a href='#'>Contact</a></li>
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='absolute top-[30%] h-[50%] text-2xl md:text-5xl text-white tracking-[.25rem] md:tracking-[1.75rem] font-extrabold'>WE ARE CREATIVES</h1>
          <img src={arrow} className='absolute top-[50%] text-5xl text-white' />
        </div>
    </div>
  )
}

export default Header