import React from 'react'

const HomeOfferts = () => {
  return (
    <>
    
    <div className='h-[7%]  min-[688px]:h-[10%] max-[768px]:bg-[#EDEBEB] md:h-[15%] lg:h-[20%] xl:h-[20%] 2xl:h-[20%] w-[100%] xl:w-[95%] border border-orange-500 flex flex-col xl:flex-row  justify-between gap-4 xl:gap-0'>
<div className='flex items-center p-12 h-[100%] border border-black w-[100%] xl:w-[49%] bg-no-repeat bg-center' style={{ backgroundImage: "url('https://i.ibb.co/bRW3YnL/image.png')", backgroundSize: "cover", backgroundPosition: "right" }}>
  <div className='border border-orange-900 w-[50%] gap-4 flex flex-col'> 
    <h2 className='text-white text-xs md:text-2xl'>Seasonal offers</h2>
    <h2 className='text-white font-bold text-sm md:text-5xl'>Until 30% less</h2>
    <h2 className='text-white text-xs md:text-2xl'>On selected products</h2>
    <button className='text-black border w-[80%] md:w-[40%] xl:w-[30%] py-1.5 rounded-3xl bg-[#dfe1e6] font-semibold'>Store</button>
  </div>

</div>
    <div className='flex items-center p-12 h-[100%] border border-black w-[100%] xl:w-[49%] bg-cover bg-center' style={{ backgroundImage: "url('https://i.ibb.co/TPHgjcN/zyro-image-1.jpg')" }}>
    <div className='border border-orange-900 w-[50%] gap-4 flex flex-col'> 
    <h2 className='text-white  text-xs md:text-2xl'>Newcomers</h2>
    <h2 className='text-white font-bold text-sm md:text-5xl '> We have what you are looking</h2>
    <h2 className='text-white  text-xs md:text-2xl'>The best brand of headphones</h2>
    <button className='text-black border w-[80%] md:w-[40%] xl:w-[30%] py-1.5 rounded-3xl bg-[#dfe1e6] font-semibold'>Buy Now!</button>
  </div>
    </div>
    </div>
    </>
  )
}

export default HomeOfferts