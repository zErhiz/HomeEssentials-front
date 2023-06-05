import React from 'react'
import { Link as Anchor } from 'react-router-dom';
const MiddleNavBar = () => {
  return (
    <>
    <div className='w-[100%] h-[40px] bg-black  flex justify-between'>
        <div className=' flex justify-center items-center content-center gap-2 px-12'>
          <svg xmlns='http://www.w3.org/2000/svg'fill='none'viewBox='0 0 24 24'strokeWidth='1.5'stroke='currentColor' className='w-6 h-6 text-white' >
            <path strokeLinecap='round' strokeLinejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' />
          </svg>
          <h2 className='text-white text-lg'>Free shipping on purchases over $499</h2>
        </div>
        <div className='text-white flex justify-center items-center content-center   px-10 gap-12'>
        <Anchor to='/about' className='mx-2 text-lg underline'> About</Anchor>
          <Anchor to='/contact' className='mx-2 text-lg underline'> Contact</Anchor>
          <Anchor to='/attendance' className='mx-2 text-lg underline'> Attendance</Anchor>
          <a className='text-white text-lg ' href='tel:+5213312345678'> Call to +52-1-33-12345678 </a>
        </div>
      </div>
    </>
  )
}

export default MiddleNavBar