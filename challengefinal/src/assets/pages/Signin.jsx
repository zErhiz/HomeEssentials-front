import React from 'react'
import { Link } from 'react-router-dom';
import { Input} from "@nextui-org/react"
import Button from 'react'

export default function Signin() {
  return (
   

    <div className='flex justify-center font-sans font-semibold items-center'>

    <div className='flex flex-col sm:w-[50%] w-[100%] justify-center items-center p-9'>Welcome back!
        <form className='w-[100%] p-9 flex flex-col justify-center bg-stone-400 border rounded-xl'>
        <Input color='secondary' label='Email' placeholder ="example@email.com" />...
    <Input.Password color='secondary' label='Password' placeholder="min. 8 characters" />...
    <div className='flex flex-col justify-center items-center'>

   <button className='bg-white xl:w-[15%] p-2   rounded-md'>Sign In</button>
        <h2 className='text-white'>Don´t have an account? <strong><Link to='/signup'>Register </Link></strong></h2>
    </div>
        </form>
    </div>
    </div>
    
  )
}
