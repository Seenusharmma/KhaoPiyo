import React from 'react'
import image1 from '../assets/image1.avif'

const Card2 = () => {
  return (
    <div className='w-fu h-[120px] bg-red-300'>
        {/* right section  */}
      <div className="w-[70%] h-full bg-slate-200">
        {/* img section  */}
        <div className="w-[50%] h-full overflow-hidden">
            <img src={image1} alt="" />
        </div>
        {/* name section  */}
        <div className="">
            <div className="">Pancake</div>
            {/* quantity  */}
            <div className=""></div>
        </div>
      </div>
      {/* left Section  */}
      <div className=""></div>
    </div>
  )
}

export default Card2
