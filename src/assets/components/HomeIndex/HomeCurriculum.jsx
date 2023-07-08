import { useNavigate } from 'react-router-dom'
const HomeCurriculum = () => {
  let navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/formCv');
  };
  return (
    <>
      <div className="bg-white xl:min-h-[5%] md:min-h-[2%] min-h-[5%] h-fit w-[85%] py-5 sm:py-[4rem] shadow-[0_4px_5px_rgba(0,0,0,0.09)] rounded-md mb-10 sm:mb-[10rem] flex flex-col items-center justify-center gap-5 sm:gap-12">
        <div className='sm:w-[50%] flex flex-col items-center gap-5'>
          <h2 className='text-2xl sm:text-xl md:text-2xl text-center xl:text-center xl:text-5xl font-bold'>We are looking for you!</h2>
          <h2 className='text-sm md:text-md text-center xl:text-center xl:text-lg w-4/6 sm:w-[80%]'>We are a market leader and we are looking for people to work with us</h2>
        </div>
        <div className='flex flex-col items-center gap-10 sm:gap-20 w-5/6 lg:w-[13rem]'>
          <button className='bg-[#7847E0] rounded-full py-3 w-full font-semibold text-white' onClick={handleButtonClick}>Upload your cv here</button>
          <img className='w-[9.5rem]' src="https://i.ibb.co/Z2BZ1ZK/image.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default HomeCurriculum