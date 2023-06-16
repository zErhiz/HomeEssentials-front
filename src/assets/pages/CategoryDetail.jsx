import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../../api'
import { useSelector, useDispatch } from 'react-redux'
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Button } from '@nextui-org/react';
const CategoryDetail = () => {
    let [categoriesProd, setCategoriesProd]= useState([])
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
      axios(`${apiUrl}products/categories/${id}`)
        .then(res => {
            setCategoriesProd(res.data)})
        .catch(err => console.log(err))
    }, [id])
console.log(categoriesProd[0])

  return (
    <>
   
   <h1 className="p-9 text-center font-bold text-3xl">{categoriesProd[0]?.category_id.name}</h1>
<div className='w-full flex flex-wrap'>
  {categoriesProd.map((prod) => (
  
    <div className="  rounded-lg p-6 w-[100%] sm:w-[50%] 2xl:w-[25%] gap-6 shadow-sm shadow-indigo-100"
    key={prod.photo}>
      
      <div className=' cursor-pointer relative' onClick={()=>navigate(`/products/${prod._id}`)}>
      <img src={prod.photo} className="h-64 w-[100%] border rounded-2xl  object-cover"/>
      </div>
    
      <div className="mt-2">
          <div>
            <dd className="font-semibold text-xl pl-5">{prod.name}</dd>
          </div>
    
        <div className="mt-6 flex items-center gap-8 text-xs justify-around w-full">
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
        </div>
      </div>
    </div>
    ))}
    </div>
</>
  )
}

export default CategoryDetail