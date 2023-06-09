import React from 'react'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../../../api'
import { useSelector, useDispatch } from 'react-redux'
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import productOne_action from '../../../store/actions/productOne'
import store from '../../../store/store'
import { Button } from '@nextui-org/react';

const {productOne}= productOne_action 
export default function ProductDetail() {
    const navigate = useNavigate()
    let storeOne = useSelector(store=>store.product)
    const { id } = useParams()
    console.log(id);
    const dispatch = useDispatch()
    let [prodOne, setProdOne]= useState([])
    
  useEffect(() => {
    axios(`${apiUrl}products/${id}`)
      .then(res => {
        setProdOne(res.data.response)
        dispatch(productOne({
          name: res.data.response.name,
          photo: res.data.response.photo,
          description: res.data.response.description
        }))
      })
      .catch(err => console.log(err))
  }, [id])
  return (
    <div className='p-6 flex justify-center items-center'>
<button  className=" border p-6 rounded-lg p-4 shadow-sm shadow-violet-700">
  <img
    alt="Home"
    src={prodOne.photo}
    className="h-96 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        

       
        <h2 className='text-center text-xl'>{prodOne.name}</h2>
      </div>

    
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xl">
      <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
       
<p className='text-center'>{prodOne.description}</p>
      </div>


    </div>
  </div>
  <div className='flex  justify-center items-center gap-60 p-6'>
<h3 className='text-xl p-2 bg-orange-400 text-white border rounded-lg font-semibold'>${prodOne.price}.-</h3>
<Button  shadow color="secondary" auto>
          BUY
        </Button>
  </div>
</button>

    </div>
  )
}
