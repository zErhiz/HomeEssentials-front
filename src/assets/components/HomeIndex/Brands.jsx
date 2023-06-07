import React from 'react'
import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import manufacturers_action from '../../../store/actions/manufacturers'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Brands = () => {
    let { manufacturers_read } = manufacturers_action
    const dispatch = useDispatch()
    let navigate=useNavigate()
    let manufacturers = useSelector(store => store.manufacturerHome.manufacturers)
  
  
  
    useEffect(() => {
      if (manufacturers.length === 0) {
          dispatch(manufacturers_read())
         
      }
  }, [])
  return (
    <>
    <div className="bg-white border border-blue-500 min-h-[3%] 2xl:min-h-[10%]  h-fit w-[95%] flex flex-col gap-2 justify-center">
  <div className="w-[100%] justify-center border border-black flex">
            <h2 className="text-2xl font-bold">Brands</h2>
        </div>
        <div className='flex border border-black flex-wrap justify-evenly gap-2'> 
        {manufacturers.map((brands)=>( 
        <div key={brands._id} className='border'>
          <img className="rounded-full w-32 h-32 object-cover" src={brands.logo} alt="" />
        </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Brands