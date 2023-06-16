import React from 'react'

import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import products_actions from '../../../store/actions/products'
import manufacturers_action from '../../../store/actions/manufacturers'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from '@nextui-org/react';

const AllProducts = () => {
  const number = 123456.789;
  console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
    let { products_read } = products_actions
    let { manufacturers_read } = manufacturers_action
  const dispatch = useDispatch()
  let navigate=useNavigate()
  let products = useSelector(store => store.products.products)
  let manufacturers = useSelector(store => store.manufacturerHome.manufacturers)
  console.log(products);


  useEffect(() => {
    if (products.length === 0) {
        dispatch(products_read()) 
    }
}, [])
useEffect(() => {
  if (manufacturers.length === 0) {
    dispatch(manufacturers_read())

  }
}, [])
  return (
<>
<h1 className='p-5 text-center font-bold text-3xl'>Take a look of our products!</h1>
<div className='w-full flex flex-wrap justify-evenly'>
{products.map((prod) => (
  
<div className="  rounded-2xl m-5 w-60 gap-6 shadow-[0_0_30px_rgba(0,0,0,0.20)]"
key={prod.photo}>
  
  <div className=' cursor-pointer relative h-4/6' onClick={()=>navigate(`/products/${prod._id}`)}>
  <img src={prod.photo} className=" h-full w-[100%] border rounded-t-2xl  object-cover"/>
  </div>

  <div className="h-2/6">
    <div className='h-1/2 py-2'>
      <p className="font-semibold text-xl pl-5">{prod.name}</p>
    </div>
    <div className="h-1/2 py-2 flex items-center gap-8 text-xs justify-around w-full">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        {prod.stock_Available > 3? (
          <img className='w-6 h-6' src="/success.svg" alt="" />
        ) : prod.stock_Available === 0 ? (
          <img className='w-6 h-6' src="/error.svg" alt="" />
        ) : prod.stock_Available <= 3 ? (
          <img className='w-6 h-6' src="/warning.svg" alt="" />
        ) : null}
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500 text-base">Stock</p>
          <p className="font-semibold text-lg text-[#7847E0]">{prod.stock_Available}</p>
        </div>
      </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <img className='w-6 h-6' src="/ticket.svg" alt="" />
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500 text-base">Price</p>
          <p className="font-semibold text-lg text-[#7847E0]">{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(prod.price)}</p>
        </div>
      </div>
    </div>
  </div>
</div>
))}
</div>
</>
)}

export default AllProducts