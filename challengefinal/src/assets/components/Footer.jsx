import React from 'react';
import { BsInstagram,BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link as Anchor } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#FFFFFF] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="mb-4 flex flex-col gap-5">
              <h4 className="text-black text-lg font-semibold">Store location</h4>
              <p className="text-gray-700">
                Av. Fray A. Alcalde 10<br />
                44100, Guad., Jal., México<br />
                info@misitio.com<br />
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
                <li>
                  <Anchor to="#">Buy all</Anchor>
                </li>
                <li>
                  <Anchor to="#">category2</Anchor>
                </li>
                <li>
                  <Anchor to="#">category3</Anchor>
                </li>
                <li>
                  <Anchor to="#">category4</Anchor>
                </li>
                <li>
                  <Anchor to="#">category5</Anchor>
                </li>
                <li>
                  <Anchor to="#">category6</Anchor>
                </li>
                <li>
                  <Anchor to="#">category7</Anchor>
                </li>
                <li>
                  <Anchor to="#">category8</Anchor>
                </li>
                <li>
                  <Anchor to="#">category9</Anchor>
                </li>
              </ul>
            </div>

            <div className="mb-4 flex flex-col gap-4">
              <h4 className="text-black text-lg font-semibold">Customer Support</h4>
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
                  <Anchor to="/jobs">Jobs</Anchor>
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
              <h4 className="text-black text-md font-semibold">We accept the following payment methods</h4>
              <div className="flex gap-20 p-4 h-20">
                <img src="https://i.ibb.co/xSGScnM/payu.png" alt="" />
                <img src="https://i.ibb.co/gg5zV28/payo2.png" alt="" />
                <img src="https://i.ibb.co/R6XPJgw/mp.jpg" alt="" />
                <img src="https://i.ibb.co/nCKJVPy/visa.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
        <div className='bg-[#EDECEC] w-[100%] h-12 flex justify-center items-center content-center'>
        <h2 className='flex justify-center content-center items-center gap-4'>
        <BsGithub/>this site was created by  <a href="https://github.com/maxi-gartner">
                  Maximiliano Gartner
                </a>
                <a href="https://github.com/nicodsd">
                  Nicolas Barrera
                </a>
                <a href="https://github.com/lucas271102">
                 Lucas Speziale
                </a>
                <a href="https://github.com/Sebas-ovalle">
                  Sebastian Ovalle
                </a>
                <a href="https://github.com/zErhiz">
                  Mateo Carrizo
                </a>
                <a href="https://github.com/Tomas-Salazar">
                  Tomas Salazar
                </a>
                <BsGithub/>
        </h2>
        </div>
    </>
  );
};

export default Footer;