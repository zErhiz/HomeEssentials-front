import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link as Anchor } from "react-router-dom";
import categories_actions from '../../store/actions/categories'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  let { categories_read } = categories_actions
  const dispatch = useDispatch()
  let navigate=useNavigate()
  let categories = useSelector(store => store.categories.categories)
 


  useEffect(() => {
    if (categories.length === 0) {
        dispatch(categories_read())
       
    }
}, [])
  return (
    <>
      <footer className="bg-[#FFFFFF] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="mb-4 flex flex-col gap-5">
              <h4 className="text-black text-lg font-semibold">
                Store location
              </h4>
              <p className="text-gray-700">
                Av. Paraiso. 4345
                <br />
                42003, Bs.As., Argentina.
                <br />
                info@misitio.com
                <br />
                +52-1-33-12345678
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com">
                  <BsInstagram />
                </a>
                <a href="https://www.facebook.com">
                  <FaFacebookF />
                </a>
                <a href="https://www.twitter.com">
                  <FaTwitter />
                </a>
                <a href="https://www.youtube.com">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-4">
              <h4 className="text-black text-lg font-semibold">Store</h4>
              <ul className="text-gray-700">
              {categories.map((cat) => (
               <li key={cat._id}>
                  <Anchor to={`/products/category/${cat._id}`}>{cat.name}</Anchor>
                </li>
               ))}
              </ul>
            </div>

            <div className="mb-4 flex flex-col gap-4">
              <h4 className="text-black text-lg font-semibold">
                Customer Support
              </h4>
              <ul className="text-gray-700">
                <li>
                  <Anchor to="/contact">Contact us</Anchor>
                </li>
                <li>
                  <Anchor to="/attendance">Attendance</Anchor>
                </li>
                <li>
                  <Anchor to="/about">About</Anchor>
                </li>
                <li>
                  <Anchor to="/formcv">Jobs</Anchor>
                </li>
              </ul>
            </div>

            <div className="mb-4 flex flex-col gap-4">
              <h4 className="text-black text-lg font-semibold">Policy</h4>
              <ul className="text-gray-700">
                <li>
                  <Anchor to="#">Shipping and Returns</Anchor>
                </li>
                <li>
                  <Anchor to="#">Terms and Conditions</Anchor>
                </li>
                <li>
                  <Anchor to="#">Payment Methods</Anchor>
                </li>
                <li>
                  <Anchor to="#">FAQ</Anchor>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-t border-gray-400 my-8" />

          <div className="flex justify-center">
            <div className="text-center">
              <h4 className="text-black text-md font-semibold">
                We accept the following payment methods
              </h4>
              <div className="flex  justify-center gap-4  p-4">
                <img
                  src="https://i.ibb.co/xSGScnM/payu.png"
                  alt=""
                  className=" w-[10%] lg:w-[5%]  h-auto"
                />
                <img
                  src="https://i.ibb.co/gg5zV28/payo2.png"
                  alt=""
                  className=" w-[10%] lg:w-[5%]  h-auto"
                />
                <img
                  src="https://i.ibb.co/R6XPJgw/mp.jpg"
                  alt=""
                  className="w-[10%] lg:w-[5%] h-auto"
                />
                <img
                  src="https://i.ibb.co/nCKJVPy/visa.png"
                  alt=""
                  className="w-[10%] lg:w-[5%]  h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="hidden md:block">
      <div className="bg-[#EDECEC] w-full h-12 flex justify-center items-center content-center">
  <h2 className="flex flex-row justify-center content-center items-center gap-4 text-center text-sm">
    <BsGithub />
    this site was created by{" "}
    <a href="https://github.com/maxi-gartner">Maximiliano Gartner</a>
    <a href="https://github.com/nicodsd">Nicolas Barrera</a>
    <a href="https://github.com/lucas271102">Lucas Speziale</a>
    <a href="https://github.com/Sebas-ovalle">Sebastian Ovalle</a>
    <a href="https://github.com/zErhiz">Mateo Carrizo</a>
    <a href="https://github.com/Tomas-Salazar">Tomas Salazar</a>
    <BsGithub />
  </h2>
</div>
</div>
    </>
  );
};

export default Footer;
