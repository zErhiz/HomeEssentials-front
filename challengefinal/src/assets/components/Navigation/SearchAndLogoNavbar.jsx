import React from 'react'
import { Link as Anchor } from 'react-router-dom';
const SearchAndLogoNavbar = () => {
  return (
    <>
     <div className='bg-[#FFFFFF] h-[80px] flex justify-between'>
      <div className='flex gap-12 justify-center items-center content-center px-12'> 
        <h1 className='text-4xl font-semibold'>Home Essentials</h1>
        <div class="flex items-center">
  <input type="text" placeholder="Search..." class="rounded-l-full border-gray-300 bg-[#EDECEC] focus:outline-none focus:ring-2 focus:ring-black focus:border-black px-4 py-2 flex-1" />
  <button class="bg-purple-500 hover:bg-purple-600 text-white rounded-r-full px-4 py-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  </button>
</div>
      </div>
      <div className='flex justify-center items-center content-center px-12 gap-8'>
      <Anchor to='/enter' className='mx-2 text-xl gap-1  flex justify-center content-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Enter</Anchor>
      <div className='flex justify-center content-center items-center'> 
      <Anchor to='/favourites' className='mx-2 text-xl underline flex justify-center items-center content-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> Favorites</Anchor>
      </div>
        <div className='flex'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          <h2 class="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">0</h2>
</div>
      </div>
    </div>
    
    </>
  )
}

export default SearchAndLogoNavbar