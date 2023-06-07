import React from 'react'
import { Link } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react";

export default function Signup() {
  return (
    <div>

    <div className='flex flex-col justify-center items-center p-9'>Signup
    <form className='w-[100%] sm:w-[50%] p-9 flex flex-col justify-center bg-stone-400 border text-white rounded-xl'>

    <Input color='white' label='Email' placeholder ="example@email.com" />...
    <Input.Password color='secondary' label='Password' placeholder="min. 8 characters" />
    <Input  label='Photo' placeholder ="URL" />...
    <div className='flex flex-col justify-center items-center'>

    <button className='bg-white text-black xl:w-[15%] border rounded-md p-2' type='submit' auto>
          Register
        </button>
        <h2>Already have an account? <strong><Link to='/signin'>Sign in!</Link></strong></h2>
    </div>
    </form>
    </div>
    </div>
  )
}
