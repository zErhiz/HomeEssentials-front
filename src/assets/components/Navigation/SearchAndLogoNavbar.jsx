import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import categories_actions from '../../../store/actions/categories'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Favourites from "./Favourites.jsx";
import SearchBar from "./SearchBar";
import Carrito from "./Carrito"
import axios from "axios";
import apiUrl from '../../../../api';
import userLogin_action from '../../../store/actions/userLogin_action'
const { SaveUserLogin } = userLogin_action
import logo from '../../../../public/images/Logos/logo-2-b.png'

const SearchAndLogoNavbar = () => {
  let { categories_read } = categories_actions
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let categories = useSelector(store => store.categories.categories)
  const { userLogin } = useSelector(store => store)
  //console.log(userLogin);

  const user = JSON.parse(localStorage.getItem('user')) || ""
  const email = userLogin.email ? userLogin.email : user.email

  const [cart, setCart] = useState(false)
  //console.log("cart", cart);
  const [fav, setFav] = useState(false)

  const home = () => {
    navigate('/')
  }

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(categories_read())
    }
  }, [])

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [seeButtonsUser, setSeeButtonsUser] = useState(true)
  const handlebutton = (boolean) => {
    boolean ? setSeeButtonsUser(false) : setSeeButtonsUser(true)
  }
  let token = () => localStorage.getItem('token')
  let headers = { headers: { 'authorization': `Bearer ${token()}` } }
  const handleSignOut = () => {
    axios.post(apiUrl + `auth/signout`, userLocalStorage.email, headers)
      .then(() => {
        localStorage.clear();
        navigate('/')
      })
      .catch(err => alert(err))
    dispatch(SaveUserLogin({
      token: "",
      user: {}
    }))
  }
  const tokenLocalStorage = localStorage.getItem('token');
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));
  const role = user?.role
  console.log(role)
  let tokenCurrent = ""
  userLogin.token.length > 0 ? tokenCurrent = userLogin.token : tokenCurrent = tokenLocalStorage
  //console.log(tokenCurrent);

  let userCurrent = {}
  userLogin.user.length > 0 ? userCurrent = userLogin.user : userCurrent = userLocalStorage
  //console.log(userCurrent);

  const [products, setProducts] = useState([])
  useEffect(() => {
    //capturar productos
    axios.get(`${apiUrl}cart/${email}`, headers)
      .then(res => setProducts(res.data.response))
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <Carrito openModal={cart}
        onCloseModal={() => setCart(false)} />
      <Favourites openModal={fav}
        onCloseModal={() => setFav(false)} />

      <div className="justify-center bg-[#FFFFFF] h-[100px] lg:h-[70px] 2xl:h-[80px] flex lg:justify-between">
        <div className="px-4 lg:flex lg:gap-12 flex flex-col lg:flex-row justify-center items-center content-center lg:px-12">
          <div className=" flex flex-row gap-12">
            <img className="w-24 object-cover cursor-pointer" onClick={home} src={logo} alt="logo" />
            <button className="block lg:hidden" onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg> </button>
          </div>
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>
        <div className="lg:flex lg:justify-center font-semibold lg:items-center lg:px-12 lg:gap-3">
          <div className="hidden lg:block">
            {!tokenCurrent ? (
              <Anchor
                to="/signin"
                className=" mx-2 text-xl lg:gap-1  flex justify-center content-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Enter
              </Anchor>
            ) : (
              <div
                onClick={() => {
                  handlebutton(seeButtonsUser)
                }}
                className="mx-2 text-[#393939] lg:gap-1 flex justify-center items-center relative cursor-pointer">
                <div className="min-w-40 flex items-center gap-3">
                  <p>{userCurrent.name}</p>
                  <img src={userCurrent.photo} className="w-8 h-8 rounded-full object-cover" />
                </div>
                {!seeButtonsUser ? (
                  <div className="absolute top-10 lg:w-[7rem] 2xl:h-[5rem] 2xl:2-[10rem] lg:h-[4.5rem] bg-[#ffffff] shadow-[0_1px_10px_rgba(0,0,0,0.09)] drop-shadow-[0_0_1px_rgba(0,0,0,0.05)] rounded-lg z-30">
                    <button onClick={() => navigate('/userPanel')} className="w-full h-1/2 text-start pl-2 hover:shadow-inner hover:bg-[#c6c6c621] hover:dark:shadow-black/10 text-sm"> User Panel</button>
                    <button onClick={handleSignOut} className="w-full h-1/2 text-start pl-2 hover:shadow-inner border-t-[1.5px] hover:bg-[#c6c6c621] 2xl:border-t-[2px] hover:dark:shadow-black/10 text-[#7847E0] text-sm"> Sign Out</button>
                    {role === 1 || role === 2 ? (
                      <button onClick={() => navigate('/admin/products')} className="w-full h-1/2 text-start pl-2 hover:shadow-inner hover:dark:shadow-black/10">
                        Admin Panel
                      </button>
                    ) : null}
                  </div>
                ) : ("")}
              </div>
            )}
          </div>
          {!seeButtonsUser ? (
            <div className="absolute w-full h-full top-0 right-0 z-20"
              onClick={() => { handlebutton(seeButtonsUser) }}></div>
          ) : ("")}
          <div className="lg:block flex justify-center content-center items-center">
            <div
              className="mx-2 text-[#393939] flex cursor-pointer justify-center items-center content-center gap-1"
              onClick={() => setFav(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="2xl:w-8 2xl:h-8 h-6 w-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>{" "}
              Favorites
            </div>
          </div>
          <div className="flex flex-row cursor-pointer px-5"
            onClick={() => setCart(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="2xl:w-8 2xl:h-8 h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            {/* <h2 className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center mx-2">
              {products.length}
            </h2> */}
          </div>
        </div>
        <div
          className={`${menuIsOpen ? "fixed inset-0 bg-white" : "hidden"
            } z-50`}
        >
          <div className="w-full justify-end flex">
            <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-full w-full flex flex-col gap-4 ">
            <div className="flex w-[100%] h-1/6 items-center content-center justify-center  ">
              <div className="bg-white p-4 flex gap-8 ">
                <div className="flex flex-row-reverse justify-center content-center items-center">
                  <Anchor to="/enter" className="block my-2">
                    Enter
                  </Anchor>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex  flex-row-reverse justify-center content-center items-center">
                  <Anchor to="/favourites" className="block my-2">
                    Favorites

                  </Anchor>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <h2 className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
                    0
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex  w-[100%] h-1/4 items-center content-center justify-center  ">
              <div className="bg-white p-4 flex gap-8 ">
                <div className="flex flex-row-reverse justify-center content-center items-center">

                  <div className='text-black flex flex-col justify-center items-center content-center gap-1'>
                    <Anchor to='/about' className='mx-2 text-lg underline'> About</Anchor>
                    <Anchor to='/contact' className='mx-2 text-lg underline'> Contact</Anchor>
                    <Anchor to='/attendance' className='mx-2 text-lg underline'> Attendance</Anchor>
                    <a className='text-black text-lg ' href='tel:+5213312345678'> Call to +52-1-33-12345678 </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAndLogoNavbar;
