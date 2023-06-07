import React from 'react'

const HomeCurriculum = () => {
  return (
    <>
      <div className="bg-white border border-blue-500 xl:min-h-[5%] md:min-h-[2%] min-h-[5%]  h-fit w-[95%] flex flex-col items-center justify-center gap-12">
            <div className='border border-black'>
                <h2 className='text-xl md:text-2xl text-center xl:text-center  xl:text-6xl font-bold'>We are looking for you!</h2>
                <h2 className='text-sm md:text-md text-center xl:text-center  xl:text-3xl text-gray-500'>we are a market leader and we are looking for people to work with us</h2>
            </div>
            <div className='border border-black flex flex-col gap-8'>
                <button className='bg-[#403d56]  py-3 rounded-2xl font-bold text-white'>Upload your cv here</button>
                <img className='h-12 w-[100%]' src="https://i.ibb.co/Z2BZ1ZK/image.png" alt="" />
            </div>
            </div>
    </>
  )
}

export default HomeCurriculum