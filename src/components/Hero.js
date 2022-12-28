import React from 'react'
import egg from '../assets/desktop/image-transform.jpg'
import glass from '../assets/desktop/image-stand-out.jpg'
import img from '../assets/desktop/image-graphic-design.jpg'
import img2 from '../assets/desktop/image-photography.jpg'


const Hero = () => {
  return (
    <div className=''>
        <div className='flex flex-row-reverse w-[100%]'>
            <img src={egg} className='w-[50%]' />
            <div className='w-[50%] flex flex-col justify-center items-center text-center'>
            <div className='w-[50%]'>
                <h1 className='text-sm ss:text-lg sm:text-xl font-bold pb-4'>Transform your brand</h1>
                <p className='text-xs ss:text-sm sm:text-base'>We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button className='pt-6 font-extrabold cursor-pointer border-b-orange-400 border-dotted border-b-[2px] hover:bg-orange-100 rounded-full w-[80%] '>Learn more</button>
            </div>
            </div>
        </div>

        <div className='flex flex-row'>
            <img src={glass}  className='w-[50%]' />
            <div  className='w-[50%] flex flex-col justify-center items-center text-center'>
            <div className='w-[50%]'>
                <h1 className='text-sm sm:text-lg sm:text-xl font-bold pb-4'>Stand out to the right audience</h1>
                <p className='text-xs sm:text-sm sm:text-base'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <button className='pt-6 font-extrabold cursor-pointer border-b-orange-400 border-dotted border-b-[2px] hover:bg-orange-100 rounded-full w-[80%] '>Learn more</button>
            </div>
            </div>
        </div>

        <div className='flex flex-row'>
            
            <div className='w-full relative' >
            
            <img src={img} className='w-full'/>

            <div className='absolute top-[50%] sm:top-[60%] lg:top-[70%] w-full text-center'>
                <h1 className='text-sm sm:text-lg sm:text-xl font-bold'>Graphic Design</h1>
                <p className='text-xs sm:text-sm sm:text-base'> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. </p>    
            </div> 

            </div>

            
            <div  className='w-full relative'>
            
            <img src={img2} className='w-full'/>
            
            <div className='absolute top-[50%] sm:top-[60%] lg:top-[70%] w-full text-center'>
                <h1 className='text-sm sm:text-lg sm:text-xl font-bold'>Photography</h1>
                <p className='text-xs sm:text-sm sm:text-base'> Increase your credibility by getting the most stunning, high-quality photos that improve your business image. </p>    
            </div> 

            </div>

        </div>
    </div>
  )
}

export default Hero