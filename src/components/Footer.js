import React from 'react'
import fb from '../assets/icon-facebook.svg';
import insta from '../assets/icon-instagram.svg'
import twit from '../assets/icon-twitter.svg'
import print from '../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center'>
        <h1 className='text-3xl overflow-hidden'>sunnyside</h1>

        <div className='w-[40%] md:w-[15%] py-10'>
            <ul className='flex justify-between w-[100%]'>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Projects</a></li>
            </ul>
        </div>

        <div className='flex justify-between w-[30%] md:w-[10%]'>
            <img src={fb} /> 
            <img src={insta} /> 
            <img src={twit} /> 
            <img src={print} /> 
        </div>
    </div>
  )
}

export default Footer