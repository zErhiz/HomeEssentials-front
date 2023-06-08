import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import apiUrl from '../../../api';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Signup() {
  const navigate = useNavigate()
  const password = useRef()
  const email= useRef()
  const photo = useRef()
  function handleForm(e){
    e.preventDefault()
    let data={
      email:email.current.value,
      password:password.current.value,
      photo:photo.current.value
    }
    axios.post(apiUrl + 'auth/signup', data)
    .then(res=> {
      Swal.fire({
        title: 'User registered',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
   
      
        navigate ('/')
        
    })
  
     .catch(err=>{console.log(err)
      Swal.fire({
        title: 'Check the fields',
        text: err.response.data.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    })
  }
  return (
    <div>

    <div className='flex flex-col justify-center items-center p-9'>Signup
    <form onSubmit={(e)=>handleForm(e)} className='w-[100%] sm:w-[50%] p-9 flex flex-col justify-center bg-stone-400 border text-white rounded-xl'>

    <Input color='white' ref={email} label='Email' placeholder ="example@email.com" />...
    <Input.Password color='secondary' ref={password} label='Password' placeholder="min. 8 characters" />
    <Input  label='Photo' ref={photo} placeholder ="URL" />...
    <div className='flex flex-col justify-center items-center'>

    <input className='bg-white text-black xl:w-[15%] border rounded-md p-2' type='submit' value='Register' auto/>
          
        <h2>Already have an account? <strong><Link to='/signin'>Sign in!</Link></strong></h2>
    </div>
    </form>
    </div>
    </div>
  )
}
