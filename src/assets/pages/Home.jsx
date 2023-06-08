
import React from "react";
import { useEffect, useState } from 'react'
import HomeFirstComponent from "../components/HomeIndex/HomeFirstComponent";
import HomeOfferts from "../components/HomeIndex/HomeOfferts";
import HomeBuying from "../components/HomeIndex/HomeBuying";
import HomeCategory from "../components/HomeIndex/HomeCategory";
import cards_home from '../../store/actions/cardsHome'
import { useSelector, useDispatch } from "react-redux";
import MiddlePhotoSection from "../components/HomeIndex/MiddlePhotoSection";
import HomeCurriculum from "../components/HomeIndex/HomeCurriculum";
import { useNavigate } from "react-router-dom";
import {Link as Anchor } from 'react-router-dom'
import Brands from "../components/HomeIndex/Brands";

const Home = () => {
  let { cards_home_read } = cards_home
  const dispatch = useDispatch()
  let cards = useSelector(store => store.cardsHome.productsHome)
  const navigate = useNavigate()
  const redirectToAllProducts = () => {
    navigate('/allproducts');
  };

useEffect(() => {
  if (cards.length === 0) {
      dispatch(cards_home_read())
     
  }
}, [])
const imageStyle = "h-[100%] w-[100%] transition-transform transform hover:scale-105 cursor-pointer";

  return (

    <>
      <HomeFirstComponent />
      <div className="bg-white  h-[10vh] xl:h-[5vh]"></div>
      <div className=" h-[1450vh] min-[688px]:h-[1000vh] max-[768px]:bg-[#EDEBEB] md:h-[800vh] lg:h-[400vh]  xl:h-[450vh] 2xl:h-[400vh] border border-blue-950 bg-[#EDEBEB] flex  flex-col items-center gap-12 ">
        <HomeOfferts />
      <HomeBuying />
      {/* div de cartas */}
      <div className="bg-white border border-blue-500  h-fit xl:min-h-[25%] 2xl:min-h-[20%] w-[95%] flex flex-col p-4 justify-evenly">
        <div className="border border-black w-[100%] items-center justify-center flex "><h2 className="text-3xl font-bold">Best Sellers</h2></div>
        <div className="h-fit  xl:h-[60%] border w-[100%] justify-center border-black flex-wrap flex ">
          {cards.map((car)=> (
        <div key={car._id} className='flex flex-col border border-orange-500 w-[100%] sm:w-[40%] lg:w-[20%] xl:w-[20%] 2xl:w-[16.66%]'>
  <div className='border border-black h-[70%]'>
       <img  onClick={()=>navigate(`/products/${car._id}`)} className={imageStyle} src={car.photo} alt="" />
     </div>
        <div className='border border-blue-500 h-[30%] flex flex-col justify-between'>
            <h2 className="text-2xl text-black font-semibold text-start">{car.name}</h2>
            <h2 className="text-xl text-purple-500">${car.price}</h2>
        </div>
  

    </div>
))}
        </div>
        <div className="flex justify-center">  <button   onClick={redirectToAllProducts} className='rounded-3xl py-2.5 w-[50%] sm:w-[25%] 2xl:w-[10%] md:py-3.5 bg-[#403d56] text-white font-semibold'> See all products</button></div>
      </div>

      {/* div de categorias  */}
    <HomeCategory/>
            {/* seccion de photos donde esta la foto a la mitad y el boton tienda */}
     <MiddlePhotoSection/>
  {/* marcas */}
  <Brands/>
  {/* Curriculum */}
<HomeCurriculum/>
      </div>

    </>
  );
};

export default Home;
