import axios from 'axios'
import { useEffect, useState } from 'react'
import apiUrl from '../../../../api'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import productOne_action from '../../../store/actions/productOne'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  cartNav_action from '../../../store/actions/cartNav'
const {cartNav}= cartNav_action 

const {productOne}= productOne_action 
export default function ProductDetail() {
  let count = useSelector(store=>store.cartNavReducer.cart)
  console.log('count', count)
    const { id } = useParams()
    const dispatch = useDispatch()
    let [prodOne, setProdOne]= useState([])
    const user = JSON.parse(localStorage.getItem('user')) || ""
    const token = localStorage.getItem('token')|| ""
    const email = user.email
    let headers = { headers: { 'authorization': `Bearer ${token}` } }
    
    //agregar producto
    const addProduct = (product_id) => { 
      const data = {userEmail: email, productId: product_id}
      axios.post(`${apiUrl}cart/create`, data, headers).then(res => {
          console.log(res.data.message)
          axios.get(`${apiUrl}cart/${email}`, headers).then(res => {
       
            dispatch((cartNav({
                
                cart:res.data.response.length
        
            })))
            
            }).catch(err => console.log(err))

          toast.success(res.data.message[0], {
            theme: "colored",
                  })
           
           
             


      }).catch(err => {
        console.log(err)
        toast.error(err.response.data.message[0], {
          theme: "colored",
          });})
  }
  //agregar producto a favoritos
  const addFavorites = (product_id) => {
    const data = {userEmail: email, productId: product_id}
    axios.post(`${apiUrl}favorites`, data, headers).then(res => {
        console.log(res.data)
        toast.success("Article added to favorites", {
            theme: "colored",
            })
    }).catch(err => {
        console.log(err)
        toast.error(err.response.data.message, {
            theme: "colored",
            });})
  }
    
  useEffect(() => {
    axios(`${apiUrl}products/${id}`)
      .then(res => {
        setProdOne(res.data.response)
        dispatch(productOne({
          name: res.data.response.name,
          photo: res.data.response.photo,
          description: res.data.response.description
        }))
      })
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  let result= (prodOne.price / 12).toFixed(2);



  return (
  
  
  <section>
    <div className="relative mx-auto max-w-screen-xl px-4 py-8">
      <div>
        <h1 className="text-2xl font-bold lg:text-3xl">{prodOne.name}</h1>
  
        <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
      </div>
  
      <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
        <div className="lg:col-span-3">
          <div className="relative mt-4">
            <img
              alt="Tee"
              src={prodOne.photo}
              className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
            />
  
            <div
              className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
  
              <span className="ms-1.5 text-xs"> Hover to zoom </span>
            </div>
          </div>
  
          <ul className="mt-1 flex gap-1">
            <li>
              <img
                alt="Tee"
                src={prodOne.photo}
                className="h-16 w-16 rounded-md object-cover"
              />
            </li>
  
            <li>
              <img
                alt="Tee"
                src={prodOne.photo}
                className="h-16 w-16 rounded-md object-cover"
              />
            </li>
  
            <li>
              <img
                alt="Tee"
                src={prodOne.photo}
                className="h-16 w-16 rounded-md object-cover"
              />
            </li>
  
            <li>
              <img
                alt="Tee"
                src={prodOne.photo}
                className="h-16 w-16 rounded-md object-cover"
              />
            </li>
          </ul>
        </div>
  
        <div className="lg:sticky lg:top-0">
          <form className="space-y-4 lg:pt-8">
            <fieldset>
              <legend className="text-lg font-bold">Color</legend>
  
              <div className="mt-2 flex flex-wrap gap-1">
                <label htmlFor="color_green" className="cursor-pointer">
                  <input
                    type="radio"
                    id="color_green"
                    name="color"
                    className="peer sr-only"
                    checked
                  />
  
                  <span
                    className="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>
  
                <label htmlFor="color_blue" className="cursor-pointer">
                  <input
                    type="radio"
                    id="color_blue"
                    name="color"
                    className="peer sr-only"
                  />
  
                  <span
                    className="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>
  
                <label htmlFor="color_pink" className="cursor-pointer">
                  <input
                    type="radio"
                    id="color_pink"
                    name="color"
                    className="peer sr-only"
                  />
  
                  <span
                    className="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>
  
                <label htmlFor="color_red" className="cursor-pointer">
                  <input
                    type="radio"
                    id="color_red"
                    name="color"
                    className="peer sr-only"
                  />
  
                  <span
                    className="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>
  
                <label htmlFor="color_indigo" className="cursor-pointer">
                  <input
                    type="radio"
                    id="color_indigo"
                    name="color"
                    className="peer sr-only"
                  />
  
                  <span
                    className="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>
              </div>
            </fieldset>
            <div className="rounded border bg-gray-100 p-4">
              <p className="text-sm">
                <span className="block"> Pay as low as ${result}/mo with 0% APR in 12 installments. </span>
  
                <a href="" className="mt-1 inline-block underline"> Find out more </a>
              </p>
            </div>
  
            <div>
              <p className="text-xl font-bold">{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(prodOne.price)}</p>
            </div>
  
            <button
              type="submit"
              onClick={(e)=> {
                e.preventDefault()
                addProduct(prodOne._id)
              }}
              className="w-full rounde px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300"
            >
              Add to cart
            </button>
  
            <button
              type="button"
              onClick={()=> addFavorites(prodOne._id)}
              className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide flex justify-center items-center hover:scale-110 duration-300"
            >
              <span className='text-3xl'>💟 </span> Add Favorites
            </button>
          </form>
        </div>
  
        <div className="lg:col-span-3">
          <div className="prose max-w-none">
            <p>
              {prodOne.description}
            </p>
          </div>
        </div>
      </div>
    </div>
            <ToastContainer
            transition={Flip}
            position="bottom-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
  </section>
  )
}
