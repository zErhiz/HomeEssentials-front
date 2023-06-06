import React from 'react'
import { Link } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react"

export default function Signin() {
  return (
    <div className='flex flex-col justify-center items-center p-9'>Welcome back!
        <form className='w-[100%] p-9 flex flex-col justify-center bg-violet-200 border rounded-xl'>
        <Input color='secondary' label='Email' placeholder ="example@email.com" />...
    <Input.Password color='secondary' label='Password' placeholder="min. 8 characters" />...
    <Button color="gradient" type='submit' auto>
          Sign in 
        </Button>
        <h2>Don´t have an account? <strong><Link to='/signup'>Register </Link></strong></h2>
        </form>
    </div>
  )
}
