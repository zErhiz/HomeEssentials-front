import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import apiUrl from '../../../api';
import axios from 'axios';
import Swal from 'sweetalert2';
import backgroundImage from '../../../public/images/banners/Register.png'
import logo from '../../../public/images/Logos/logo-solid-b.png'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const navigate = useNavigate()
  const password = useRef()
  const email = useRef()
  const photo = useRef()
  const name = useRef()
  const lastName = useRef()

  function handleForm(e) {
    e.preventDefault()

    let inputName = name.current.value;
    let inputLastName = lastName.current.value;
    let inputEmail = email.current.value;
    let inputPhoto = photo.current.files[0]
    let inputPassword = password.current.value;

    const formData = new FormData();
    formData.append('name', inputName);
    formData.append('lastName', inputLastName);
    formData.append('email', inputEmail);
    formData.append('password', inputPassword);
    formData.append('photo', inputPhoto);

    let dataUser = {
      email: inputEmail,
      password: inputPassword
    };

    axios
      .post(apiUrl + "auth/signup", formData)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Realizar la solicitud de inicio de sesión después de que la solicitud de registro haya finalizado
        axios
          .post(apiUrl + "auth/signin", dataUser)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            Swal.fire({
              title: "User created succesfully, welcome!",
              icon: "success",
              showConfirmButton: true,
              confirmButtonText: "OK",
              allowOutsideClick: false
            });
            navigate("/");
          })
          .catch((err) => {
            console.log(err.response.data.message);
            Swal.fire(`${err.response.data.message}`);
          });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        Swal.fire(`${err.response.data.message}`);
      });
  }

  return (
    <div
      className='z-20 min-h-screen w-[100%] flex font-sans justify-end font-semibold items-center'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

      }}>
      <div className='relative flex flex-col z-20 sm:w-[60%] md:w-[55%] lg:w-[40%] w-[50%] items-center text-[#7847E0] selection:bg-[#7847E0] selection:text-[#ffe927] mr-20'>
        <div className='relative h-[6rem] w-[100%] sm:w-[100%] bg-white flex items-center shadow-[0_5px_10px_rgba(0,0,0,0.15)] justify-center rounded-[8px_8px_0_0] mb-[2px]'>
          <h1 className='text-3xl font-bold'>Welcome!</h1>
          <img className='absolute w-8 opacity-10 top-3 right-3' src={logo} alt="logo" />
        </div>
        <form onSubmit={(e) => handleForm(e)} encType="multipart/form-data" className='relative sm:w-[100%] h-[30rem] bg-white p-9 flex flex-col justify-evenly rounded-[0_0_8px_8px] shadow-[0_5px_10px_rgba(0,0,0,0.15)]'>
          <p className='absolute bottom-3 left-3 text-4xl font-bold text-[#E7E7E7]'>Sign Up</p>
          <div className='flex justify-center w-full'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col w-full'>
                <label htmlFor='send'>Name</label>
                <input
                  className='bg-[#E7E7E7] h-10 w-[100%] xl:w-[25rem] rounded-md focus:outline-none focus:bg-[#7747e03f] focus:text-[#393939] pl-[0.5rem] duration-100'
                  type='text'
                  autoComplete="off"
                  ref={name}
                  placeholder="Name"
                />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor='send'>Last Name</label>
                <input
                  className='bg-[#E7E7E7] h-10 w-[100%] xl:w-[25rem] rounded-md focus:outline-none focus:bg-[#7747e03f] focus:text-[#393939] pl-[0.5rem] duration-100'
                  type='text'
                  autoComplete="off"
                  ref={lastName}
                  placeholder="Last name"
                />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor='send'>Email</label>
                <input
                  className='bg-[#E7E7E7] h-10 w-[100%] xl:w-[25rem] rounded-md focus:outline-none focus:bg-[#7747e03f] focus:text-[#393939] pl-[0.5rem] duration-100'
                  type='email'
                  autoComplete="off"
                  ref={email}
                  placeholder="example@email.com"
                />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor="">Password</label>
                <input
                  className='bg-[#E7E7E7] h-10 w-[100%] xl:w-[25rem] rounded-md focus:outline-none focus:bg-[#7747e03f] focus:text-[#393939] pl-[0.5rem] duration-100'
                  type='password'
                  autoComplete="off"
                  ref={password}
                  placeholder="min. 8 characters"
                />
              </div>
              <input type="file" name="photo" id="upload" label='Photo' ref={photo} />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <input className='bg-orange-400 text-black xl:w-[25%] cursor-pointer border rounded-md p-2' type='submit' value='Register' />
            <ToastContainer />
            <h2 className='text-[#7847E0] text-sm'>Already registered? <strong><Link to='/signin'>Sign in</Link></strong></h2>
          </div>
        </form>
      </div>
    </div>
  )
}
