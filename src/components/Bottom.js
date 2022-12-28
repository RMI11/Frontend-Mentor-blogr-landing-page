import React from 'react'
import img1 from '../assets/desktop/image-gallery-milkbottles.jpg'
import img2 from '../assets/desktop/image-gallery-orange.jpg'
import img3 from '../assets/desktop/image-gallery-cone.jpg'
import img4 from '../assets/desktop/image-gallery-sugarcubes.jpg'

const Bottom = () => {
  return (
    <div className='flex'>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
    </div>
  )
}

export default Bottom