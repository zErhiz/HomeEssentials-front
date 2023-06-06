import React from 'react'

import {Link as Anchor } from 'react-router-dom'


const Home = () => {
  return (
    <div className='py-8 gap-2 xl:py-0 xl:gap-0 h-[81.2vh] w-[100%] border border-black flex flex-col items-center xl:items-start xl:flex xl:flex-row xl:justify-end'>
     <div className=' content-center items-center w-[50%] xl:w-[30%]  xl:h-[20%] 2xl:h-[20%] 2xl:w-[20%] xl:relative xl:z-10 xl:top-[30%] xl:left-[10%] border border-blue-500 gap-4 xl:flex-none flex flex-col'> 
      <h2 className='text-xl md:text-5xl font-bold text-center'>Super prices on your favorite items</h2>
      <h2 className='text-center md:text-start text-md md:text-xl text-gray-500'>Earn more for your money</h2>

      <button className='rounded-3xl py-2.5 w-[60%] md:w-[40%] xl:w-[50%] md:py-3.5 bg-[#403d56] text-white font-semibold'><Anchor to='/allproducts'>Buy now</Anchor></button>

      </div>   
    <div className='h-[100%] w-[100%] xl:w-[75%] border border-orange-500 relative z-0'>
      <img src='https://i.ibb.co/HCR11br/image.png' alt='image bg' className='w-full h-full object-contain' />
    </div>
  </div>
  )
}

export default Home