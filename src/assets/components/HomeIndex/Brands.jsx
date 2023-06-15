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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (manufacturers.length === 0) {
      dispatch(manufacturers_read())
    }
  }, [])
  
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % (manufacturers.length + 1));
    }, 3000);
    
    return () => clearInterval(carouselInterval);
  }, []);
  
  return (
    <>
      <div className="bg-white 2xl:min-h-[10%] min-h-fit h-fit w-[85%] flex flex-col 2xl:py-[4rem] gap-2 shadow-[0_4px_5px_rgba(0,0,0,0.09)] rounded-md justify-center">
        <div className="w-[100%] justify-center flex">
          <h2 className="text-2xl font-medium mt-[4rem]">Brands</h2>
        </div>
        <div className='flex slider justify-end overflow-x-hidden w-full my-[3rem] drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)' style={{ width: '75vw', margin: 'auto' }}>
          <div ref={brands} className='flex slide-track gap-4' style={{ display: 'flex', animation: 'scroll 40s linear infinite', WebkitAnimation: 'scroll 10s linear infinite', width: `calc(200px * ${manufacturers.length + 1})`, transform: `translateX(calc(-200px * ${currentIndex}))` }}>
            {manufacturers.map((brand) => (
              <div key={brand._id} className="slide">
                <img className="rounded-full min-w-[120px] h-[120px] object-cover " src={brand.logo} alt="brand" />
              </div>
            ))}
            {manufacturers.length > 0 && (
              <div className="slide">
                <img className="rounded-full min-w-[120px] h-[120px] object-cover" src={manufacturers[0].logo} alt="brand" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands