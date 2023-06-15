import React from 'react'
import { useNavigate } from 'react-router-dom'
import fondo from '../../../../public/images/banners/Home.png'

const HomeFirstComponent = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='py-8 gap-2 selection:bg-[#7847E0] selection:text-[#ffe927] xl:py-0 xl:gap-0 h-[81.2vh] w-[100%] flex flex-col items-center xl:items-start xl:flex xl:flex-row xl:justify-end relative'>
        <div className='content-center items-start w-[75%] lg:w-[50%] xl:w-[30%] xl:h-fit 2xl:w-[30%] xl:relative xl:z-10 xl:top-[30%] xl:left-[10%] gap-4 xl:flex-none lg:flex flex-col absolute left-10 top-10'>
          <h2 className='text-xl md:text-5xl xl:text-5xl font-bold text-start'>Super prices on your favorite items</h2>
          <p className='md:text-start text-md md:text-md w-full text-[#393939]'>Earn more for your money</p>
          <button onClick={() => navigate(`/allproducts`)} className='rounded-full py-2.5 w-[40%] xl:w-[10rem] bg-[#7847E0] text-white font-semibold'>Buy now</button>
        </div>
        <div className='h-[100%] w-[100%] xl:w-[75%]'>
          <img src={fondo} alt='image bg' className='w-full h-full object-cover' />
        </div>
      </div>

    </>
  )
}

export default HomeFirstComponent