import React from 'react'
import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import categories_actions from '../../../store/actions/categories'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomeCategory = () => {

  let { categories_read } = categories_actions
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let categories = useSelector(store => store.categories.categories)


  useEffect(() => {
    if (categories.length === 0) {
      dispatch(categories_read())

    }
  }, [])



  return ( 
    <>
      <div className="bg-white w-[85%] h-fit flex rounded-md shadow-[0_4px_5px_rgba(0,0,0,0.09)] flex-col gap-2">
        <div className="w-[100%] justify-center flex">
          <h2 className="text-2xl font-medium mt-[4rem]">Shop by category</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-8 my-[3rem] items-center'>

          {categories.map((cat) => (
            <div key={cat._id} className='flex flex-col w-[10rem] h-[11.5rem] text-center justify-between items-center'>
              <Anchor to={`/products/category/${cat._id}`}>
                <img className="rounded-full w-[8rem] duration-100 hover:scale-105 drop-shadow-[0_4px_5px_rgba(0,0,0,0.15)] h-[8rem] object-cover" src={cat.coverPhoto} alt="" />
              </Anchor>
              <div className='w-full h-[3rem] flex items-center justify-center'>
                <h2 className="text-md  mt-2">{cat.name}</h2>
              </div>
            </div>
          ))}

        </div>
      </div>

    </>
  )
}

export default HomeCategory