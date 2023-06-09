<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const HomeCurriculum = () => {
  let navigate = useNavigate()
  return (
    <>
      <div className="bg-white border border-blue-500 xl:min-h-[5%] md:min-h-[2%] min-h-[5%]  h-fit w-[95%] flex flex-col items-center justify-center gap-12">
            <div className='border border-black'>
                <h2 className='text-xl md:text-2xl text-center xl:text-center  xl:text-6xl font-bold'>We are looking for you!</h2>
                <h2 className='text-sm md:text-md text-center xl:text-center  xl:text-3xl text-gray-500'>we are a market leader and we are looking for people to work with us</h2>
            </div>
            <div className='border border-black flex flex-col gap-8'>
                <button onClick={()=> navigate(`/FormCV`)} className='bg-[#403d56]  py-3 rounded-2xl font-bold text-white'>Upload your cv here</button>
                <img className='h-12 w-[100%]' src="https://i.ibb.co/Z2BZ1ZK/image.png" alt="" />
            </div>
            </div>
=======
import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomeCurriculum = () => {
  let navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/formCv');
  };
  return (
    <>
      <div className="bg-white xl:min-h-[5%] md:min-h-[2%] min-h-[5%] h-fit w-[85%] py-[4rem] shadow-[0_4px_5px_rgba(0,0,0,0.09)] rounded-md mb-[10rem] flex flex-col items-center justify-center gap-12">
        <div className='w-[50%] flex flex-col items-center gap-5'>
          <h2 className='text-xl md:text-2xl text-center xl:text-center xl:text-5xl font-bold'>We are looking for you!</h2>
          <h2 className='text-sm md:text-md text-center xl:text-center xl:text-lg w-[80%]'>we are a market leader and we are looking for people to work with us</h2>
        </div>
        <div className='flex flex-col items-center gap-20 lg:w-[13rem]'>
          <button className='bg-[#7847E0] rounded-full py-3 w-full font-semibold text-white' onClick={handleButtonClick}>Upload your cv here</button>
          <img className='w-[9.5rem]' src="https://i.ibb.co/Z2BZ1ZK/image.png" alt="" />
        </div>
      </div>
>>>>>>> a087bc3c2900b853271dad486c308a57fedc58e3
    </>
  )
}

export default HomeCurriculum