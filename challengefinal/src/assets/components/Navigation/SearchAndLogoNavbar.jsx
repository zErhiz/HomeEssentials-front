import React from "react";
import { Link as Anchor } from "react-router-dom";
import { useState } from "react";
const SearchAndLogoNavbar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  console.log(menuIsOpen)
  return (
    <>
      <div className=" justify-center bg-[#FFFFFF] h-[100px] lg:h-[80px] flex lg:justify-between">
        <div className="px-4 lg:flex lg:gap-12 flex flex-col lg:flex-row justify-center items-center content-center lg:px-12">
        <div className=" flex flex-row gap-12"> 
          <h1 className="text-2xl text-start  lg:text-xl xl:text-4xl font-semibold">
            Home Essentials
          </h1>
          <button className="block lg:hidden" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> </button>
</div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-l-full border-gray-300 bg-[#EDECEC] focus:outline-none focus:ring-2 focus:ring-black focus:border-black px-4 py-2 flex-1"
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-r-full px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" lg:flex lg:justify-center lg:items-center lg:content-center lg:px-12 lg:gap-8">
          <div className="hidden lg:block">
            <Anchor
              to="/signin"
              className=" mx-2 text-xl lg:gap-1  flex justify-center content-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Enter
            </Anchor>
            
          </div>
          <div className=" hidden lg:block flex justify-center content-center items-center">
            <Anchor
              to="/favourites"
              className="mx-2 text-xl underline flex justify-center items-center content-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>{" "}
              Favorites
            </Anchor>
          </div>
          <div className=" lg:flex flex-row hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <h2 className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
              0
            </h2>
          </div>
        </div>
        <div
          className={`${
            menuIsOpen ? "fixed inset-0 bg-white" : "hidden"
          } z-50`}
        >
          <div className="w-full justify-end flex"> 
          <button  onClick={() => setMenuIsOpen(!menuIsOpen)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
        </button>
</div>
        <div className="h-full w-full flex flex-col gap-4 ">
          <div className="flex w-[100%] h-1/6 items-center content-center justify-center  ">
            <div className="bg-white p-4 flex gap-8 ">
              <div className="flex flex-row-reverse justify-center content-center items-center"> 
              <Anchor to="/enter" className="block my-2">
                Enter
                
              </Anchor>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              </div>
              <div className="flex  flex-row-reverse justify-center content-center items-center"> 
              <Anchor to="/favourites" className="block my-2">
                Favorites
                
              </Anchor>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <h2 className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
                  0
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  w-[100%] h-1/4 items-center content-center justify-center  ">
            <div className="bg-white p-4 flex gap-8 ">
              <div className="flex flex-row-reverse justify-center content-center items-center"> 
           

              <div className='text-black flex flex-col justify-center items-center content-center gap-1'>
        <Anchor to='/about' className='mx-2 text-lg underline'> About</Anchor>
          <Anchor to='/contact' className='mx-2 text-lg underline'> Contact</Anchor>
          <Anchor to='/attendance' className='mx-2 text-lg underline'> Attendance</Anchor>
          <a className='text-black text-lg ' href='tel:+5213312345678'> Call to +52-1-33-12345678 </a>
        </div>








              </div>
            </div>
          </div>
          <div className="flex  w-[100%] h-[46%]  justify-center  ">

        <ul className="flex flex-col w-[100%]  overflow-y-auto">
        <li><Anchor to="#" className="text-black hover:text-purple-600"> <div className="bg-[#EDECEC] justify-center items-center content-center flex border-b border-black">  <h2>Buy all</h2> </div> </Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600"><div className="bg-[#EDECEC] justify-center items-center content-center flex border-b border-black">  <h2>categoria 2 </h2> </div> </Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600"><div className="bg-[#EDECEC] justify-center items-center content-center flex border-b border-black">  <h2>categoria 3</h2> </div> </Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600"><div className="bg-[#EDECEC] justify-center items-center content-center flex border-b border-black">  <h2>categoria 4</h2> </div> </Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600"><div className="bg-[#EDECEC] justify-center items-center content-center flex border-b border-black">  <h2>categoria 4</h2> </div> </Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600"><div className="bg-[#EDECEC] justify-center items-center content-center flex border-b border-black">  <h2>categoria 4</h2> </div> </Anchor></li>   
      </ul>

      </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAndLogoNavbar;
