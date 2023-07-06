import React from 'react'
import image from '../../../../public/images/banners/5g.png'

const HomeOfferts = () => {
  return (
    <>
      <div className='h-[7%] min-[688px]:h-[10%] max-[768px]:bg-[#EDEBEB] md:h-[15%] lg:h-[20%] xl:h-[20%] selection:bg-[#FF8A00] 2xl:h-[20%] w-[100%] xl:w-[95%] flex flex-col xl:flex-row justify-between gap-4 xl:gap-0'>
        <div className='flex items-center p-12 shadow-[0_4px_5px_rgba(0,0,0,0.09)] h-[50%] lg:h-[30vw] mt-[2rem] sm:mt-[7rem] w-[100%] xl:w-[49%] bg-cover bg-center rounded-md' style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className='w-[60%] gap-4 flex flex-col'>
            <h2 className='text-xs md:text-xl'>Seasonal offers</h2>
            <h2 className='font-bold text-sm md:text-5xl'>Up to 30% discount</h2>
            <h2 className='text-xs md:text-xl'>On selected products</h2>
            <button className='text-white w-[80%] md:w-[40%] xl:w-[40%] py-2.5 rounded-3xl bg-[#000000] font-semibold'>Store</button>
          </div>

        </div>
        <div className='flex items-center p-12 shadow-[0_4px_5px_rgba(0,0,0,0.09)] h-[50%] lg:h-[30vw] mt-[1rem] sm:mt-[7rem] w-[100%] xl:w-[49%] bg-cover bg-center rounded-md' style={{ backgroundImage: "url('https://i.ibb.co/TPHgjcN/zyro-image-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className='w-[60%] gap-4 flex flex-col'>
            <h2 className='text-[#dfe1e6] text-xs md:text-xl'>Newcomers</h2>
            <h2 className='text-[#dfe1e6] font-bold text-sm md:text-5xl '> We have what you are looking for</h2>
            <h2 className='text-[#dfe1e6] text-xs md:text-xl'>The best brand of headphones</h2>
            <button className='text-[#393939] w-[80%] md:w-[40%] xl:w-[45%] py-2.5 rounded-3xl bg-[#dfe1e6] font-semibold'>Buy Now!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeOfferts