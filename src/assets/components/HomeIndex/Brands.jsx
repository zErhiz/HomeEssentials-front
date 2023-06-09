import React from 'react'
import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import manufacturers_action from '../../../store/actions/manufacturers'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Brands = () => {
  let { manufacturers_read } = manufacturers_action
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let manufacturers = useSelector(store => store.manufacturerHome.manufacturers)

  useEffect(() => {
    if (manufacturers.length === 0) {
      dispatch(manufacturers_read())

    }
  }, [])
  return (
    <>
      <div className="bg-white 2xl:min-h-[10%] min-h-fit h-fit w-[85%] flex flex-col 2xl:py-[4rem] gap-2 shadow-[0_4px_5px_rgba(0,0,0,0.09)] rounded-md justify-center">
        <div className="w-[100%] justify-center flex">
          <h2 className="text-2xl font-medium mt-[4rem]">Brands</h2>
        </div>
        <div className='flex flex-wrap justify-center my-[3rem] gap-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)]'>
          {manufacturers.map((brands) => (
            <div key={brands._id} className='w-[10rem]'>
              <img className="rounded-full w-32 h-32 object-cover" src={brands.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Brands