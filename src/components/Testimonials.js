import React from 'react'
import emily from '../assets/image-emily.jpg'
import thomas from '../assets/image-thomas.jpg'
import jennie from '../assets/image-jennie.jpg'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
        <h1 className='text-2xl m-16'>CLIENT TESTIMONIALS</h1>

        <div className='flex flex-row justify-between w-[70%]'>
            <div className='flex flex-col w-[30%] justify-center items-center text-center'>
                <img src={emily} className='rounded-full'/>
                <p className='pt-10 text-xs sm:text-sm sm:text-base'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                
                <div className='pt-10'>
                <p>Emily R.</p>
                <p className='font-extralight'>Marketing Director</p>
                </div>
            </div>
            
            <div className='flex flex-col w-[30%] justify-center items-center text-center'>
                <img src={thomas} className='rounded-full' />
                <p className='pt-10 text-xs sm:text-sm sm:text-base'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                
                <div className='pt-10'>
                <p>Thomas S.</p>
                <p className='font-extralight'>Chief Operating Officer</p>
                </div>
            </div>

            <div className='flex flex-col w-[30%] justify-center items-center text-center'>
                <img src={jennie} className='rounded-full' />
                <p className='pt-10 text-xs sm:text-sm sm:text-base'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                
                <div className='pt-10'>
                <p >Jennie F.</p>
                <p className='font-extralight'>Business Owner</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials