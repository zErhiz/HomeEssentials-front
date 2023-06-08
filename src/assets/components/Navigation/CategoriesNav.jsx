import React from 'react'
import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import categories_actions from '../../../store/actions/categories'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoriesNav = () => {
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
    <div className=' hidden lg:block h-[40px] bg-[#EDECEC] lg:flex items-center content-center'>
    <div>
      <ul className="flex justify-start px-12 space-x-4 items-center content-center flex-wrap h-fit">

        <li><Anchor to="/allproducts" className="text-black hover:text-purple-600 border">Buy all</Anchor></li>


      {categories.map((cat) => (
  <li key={cat._id}>
     <Anchor to={`/products/category/${cat._id}`} className="text-black hover:text-purple-600">
      {cat.name}
    </Anchor>
  </li>
))}


      </ul>
    </div>
  </div>
  )
}

export default CategoriesNav