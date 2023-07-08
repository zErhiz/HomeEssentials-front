import React from 'react'

const MiddlePhotoSection = () => {
  return (
    <>
      <div className="bg-white xl:min-h-[8%] rounded-md shadow-[0_4px_5px_rgba(0,0,0,0.09)] h-fit w-[85%] flex flex-col xl:flex-row xl:justify-between gap-2">
        <div className="w-[60%] xl:block hidden">
          <img className="h-[100%] object-cover rounded-md w-[100%]" src="https://i.ibb.co/2gz02R4/image.png" alt="" />
        </div>
        <div className='flex items-center  sm:relative sm:top-10 lg:top-24 md:top-20 xl:static h-56 sm:h-auto'>
          <div className="flex flex-col h-[80%] sm:ml-[2rem] w-full sm:w-[80%] justify-evenly items-center xl:items-start xl:justify-between">
            <h2 className=" w-5/6 text-center sm:text-start sm:w-auto text-2xl xl:text-5xl text-black font-bold">With this purchase you save 50%</h2>
            <h2 className="text-sm lg:text-lg xl:text-lg  text-[#393939]">Terms and conditions apply</h2>
            <button className="bg-[#7847E0] rounded-full py-2.5 w-5/6 sm:w-[40%] md:w-[40%] xl:w-[35%] font-semibold text-white">Store</button>
          </div>
        </div>
        <div className="xl:hidden block w-[100%]">
          <img src="https://i.ibb.co/tQHb3pX/image.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default MiddlePhotoSection