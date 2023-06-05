import React from 'react'
import { Link } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react";

export default function Signup() {
  return (
    <div className='flex flex-col justify-center items-center p-9'>Signup
    <form className='w-[100%] p-9 flex flex-col justify-center bg-violet-200 border rounded-xl'>

    <Input color='secondary' label='Email' placeholder ="example@email.com" />...
    <Input.Password color='secondary' label='Password' placeholder="min. 8 characters" />
    <Input color='secondary' label='Photo' placeholder ="URL" />...
    <Button color="gradient" type='submit' auto>
          Register
        </Button>
        <h2>Already have an account? <strong><Link to='/signin'>Sign in!</Link></strong></h2>
    </form>
    </div>
  )
}
