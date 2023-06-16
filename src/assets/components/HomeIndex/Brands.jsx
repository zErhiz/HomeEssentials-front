import { useEffect, useState, useRef } from "react";
import { Link as Anchor } from 'react-router-dom'
import manufacturers_action from '../../../store/actions/manufacturers'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../../../../styles/carrousel.css'

const Brands = () => {
  let { manufacturers_read } = manufacturers_action
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let manufacturers = useSelector(store => store.manufacturerHome.manufacturers)
  let brands = useRef(null)
  //console.log(brands)


  function siguiente(){
     if (brands.current.children.length > 0) {
 
       const primerElemento = brands.current.children[0].offsetWidth
        
       brands.current.style.transition = `4000ms linear all`
 
       const tamañoSlide = brands.current.clientWidth
       
       brands.current.style.transform = `translateX(-${tamañoSlide}px)`
       
       const transicion = ()=> {
         brands.current.style.transition = 'none'
         brands.current.style.transform = 'translateX(0)'
         brands.current.appendChild(primerElemento)
       }
       brands.current.addEventListener('transitionstart', transicion)
     }
   }
 
   
   useEffect(()=>{
     setInterval(() => {
       siguiente()
     }, 4000);
   }, []) 

  useEffect(() => {
    if (manufacturers.length === 0) {
      dispatch(manufacturers_read())

    }
  }, [])
  return (
    <>
      <div className="bg-white 2xl:min-h-[10%] min-h-fit h-fit w-[85%] flex flex-col 2xl:py-[4rem] gap-2 shadow-[0_4px_5px_rgba(0,0,0,0.09)] rounded-md justify-center">
        <div className="w-[100%] justify-center flex">
          <h2 className="text-2xl font-medium mt-[4rem]">Brands</h2>
        </div>
        <div className='flex slide justify-end overflow-x-hidden w-full my-[3rem] drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)]'>
          <div ref={brands} className='flex slide-track gap-4'>
            {manufacturers.map((brands) => (
              <div key={brands._id}>
                <img className="rounded-full min-w-[120px] h-[120px] object-cover" src={brands.logo} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands