import React from 'react'

const MiddlePhotoSection = () => {
  return (
    <>
     <div className="bg-white border border-blue-500 xl:min-h-[8%]  h-fit w-[95%] flex flex-col xl:flex-row xl:justify-between gap-2">
    <div className="w-[60%] xl:block hidden ">
    <img className="h-[100%] w-[100%]" src="https://i.ibb.co/2gz02R4/image.png" alt="" /> 
  </div>
              <div className="flex flex-col  justify-center items-center xl:items-start xl:justify-normal mt-20  xl:mr-60 xl:mt-12 2xl:mt-20">
              <h2 className="text-sm lg:text-lg xl:text-2xl text-gray-500">Season deals</h2>
              <h2 className="text-lg  lg:text-2xl xl:text-6xl text-black font-bold">With this purchase you save 50%</h2>
              <h2 className="text-sm lg:text-lg xl:text-2xl text-gray-500">Terms and conditions apply</h2>
              <button className="bg-[#403d56] w-[30%] lg:w-[20%] xl:w-[20%] py-2 rounded-2xl font-bold text-white">Store</button>
              </div>
    <div className="xl:hidden block w-[100%]">
      <img src="https://i.ibb.co/tQHb3pX/image.png" alt="" />
    </div>
            </div>
</>
  )
}

export default MiddlePhotoSection