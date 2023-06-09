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
import { Link as Anchor } from 'react-router-dom'
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
  const imageStyle = "h-[100%] w-[100%] object-cover  cursor-pointer";

  return (
    <>
      <HomeFirstComponent />
      <div className="bg-white h-[10vh] xl:h-[5vh]"></div>
      <div className="h-[1450vh] min-[688px]:h-[1000vh] max-[768px]:bg-[#EDEBEB] md:h-[800vh] lg:h-fit xl:h-fit 2xl:h-fit bg-[#EDEBEB] flex  flex-col items-center gap-12 ">
        <HomeOfferts />
        <HomeBuying />
        {/* div de cartas */}
        <div className="bg-white text-[#393939] shadow-[0_4px_5px_rgba(0,0,0,0.09)] rounded-md h-fit xl:min-h-[25%] 2xl:min-h-[20%] w-[85%] flex flex-col p-[4rem]">
          <h2 className="text-2xl w-[100%] items-center mb-[4rem] justify-center flex font-medium">Best Sellers</h2>
          <div className="h-fit xl:h-[60%] lg:w-full gap-3 justify-center flex-wrap flex">
            {cards.map((car) => (
              <div key={car._id} className='flex flex-col hover:shadow-[0_4px_10px_rgba(0,0,0,0.10)] transition-transform transform hover:scale-105 hover:rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.15)] cursor-pointer w-[100%] sm:w-[40%] xl:w-[11vw] 2xl:w-[16.66%]'>
                <div className='h-[12vw]'>
                  <img onClick={() => navigate(`/products/${car._id}`)} className={imageStyle} src={car.photo} alt="" />
                </div>
                <div className='h-fit relative border-t-[1px] border-[#393939] flex flex-col p-2 pb-[1rem] justify-start'>
                  <h2 className="text-md mt-[1rem] font-medium text-[#7847E0]">$ {car.price}</h2>
                  <h2 className="text-xs 2xl:text-md text-[#393939] text-start">{car.name}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[3rem]">
            <button onClick={redirectToAllProducts} className='rounded-full py-2.5 w-[50%] sm:w-[20%] 2xl:w-[15%] md:py-2.5 bg-[#7847E0] text-white font-semibold'> See all products</button>
          </div>
        </div>

        {/* div de categorias  */}
        <HomeCategory />
        {/* seccion de photos donde esta la foto a la mitad y el boton tienda */}
        <MiddlePhotoSection />
        {/* marcas */}
        <Brands />
        {/* Curriculum */}
        <HomeCurriculum />
      </div>

    </>
  );
};

export default Home;
