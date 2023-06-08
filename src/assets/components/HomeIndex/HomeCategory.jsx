import React from 'react'
import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import categories_actions from '../../../store/actions/categories'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomeCategory = () => {

    let { categories_read } = categories_actions
    const dispatch = useDispatch()
    let navigate=useNavigate()
    let categories = useSelector(store => store.categories.categories)
  
  
    useEffect(() => {
      if (categories.length === 0) {
          dispatch(categories_read())
         
      }
  }, [])



  return (
    <>
     <div className="bg-white border border-blue-500 min-h-[4%]  h-fit w-[95%] flex flex-col gap-2">
        <div className="w-[100%] justify-center border border-black flex">
            <h2 className="text-2xl font-bold">Shop by category</h2>
        </div>
        <div className='flex flex-wrap border-black border justify-center gap-8'> 
        {categories.map((cat)=>( 
    <div key={cat._id} className='flex flex-col justify-center items-center  '>
        <Anchor to={`/products/category/${cat._id}`}>
    <img className="rounded-full w-32 h-32 object-cover" src={cat.coverPhoto} alt="" />
       </Anchor>
    <h2 className="text-xl mt-2">{cat.name}</h2>
  </div>
        ))}
        </div>
      </div> 
    
    </>
  )
}

export default HomeCategory