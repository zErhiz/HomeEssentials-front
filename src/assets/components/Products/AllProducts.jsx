import React from 'react'
import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import products_actions from '../../../store/actions/products'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from '@nextui-org/react';

const AllProducts = () => {
    let { products_read } = products_actions
  const dispatch = useDispatch()
  let navigate=useNavigate()
  let products = useSelector(store => store.products.products)
  console.log(products);


  useEffect(() => {
    if (products.length === 0) {
        dispatch(products_read())
       
    }
}, [])
  return (
<>
<h1 className='p-9 text-center font-bold text-3xl'>Take a look of our products!</h1>
{products.map((prod) => (
  

<button className="  rounded-lg p-6 w-[100%] sm:w-[25%] gap-6 shadow-sm shadow-indigo-100">
  <img src={prod.photo}
    className="h-64 w-[100%] border rounded-2xl  object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
      
      </div>

      <div>
        <dt className="sr-only">Address</dt>

        <dd className="font-semibold text-xl">{prod.name}</dd>
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500 text-base">Stock</p>

          <p className="font-medium text-base text-black">{prod.stock_Available}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500 text-base">Price</p>

          <p className="font-medium text-base">${prod.price}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
      

        
      </div>
      <Button shadow color="secondary" auto>
          Add to cart
        </Button>
    </div>
  </div>
</button>















  
))}
</>
  )
}

export default AllProducts