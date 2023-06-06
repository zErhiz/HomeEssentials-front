import React from "react";
import HomeFirstComponent from "../components/HomeIndex/HomeFirstComponent";
import HomeOfferts from "../components/HomeIndex/HomeOfferts";
import HomeBuying from "../components/HomeIndex/HomeBuying";
const Home = () => {
  return (
    <>
      <HomeFirstComponent />
      <div className="bg-white h-[5vh]"></div>
      <div className=" h-[400vh] lg:h-[200vh] border border-blue-950 bg-[#EDEBEB] flex  flex-col items-center gap-12 ">
        <HomeOfferts />
      <HomeBuying />
      <div className="border border-black h-[20%] w-[95%] flex flex-col">
        <div className="border border-black w-[100%] items-center"><h2>Best Sellers</h2></div>
        <div>Cards</div>
        <div>  <button className='rounded-3xl py-2.5 w-[10%] md:py-3.5 bg-[#403d56] text-white font-semibold'> See all products</button></div>
      </div>

      </div>
    </>
  );
};

export default Home;
