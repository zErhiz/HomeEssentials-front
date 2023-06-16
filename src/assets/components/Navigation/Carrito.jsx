import { useEffect, useState   } from 'react'
import apiUrl from '../../../../api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import  cartNav_action from '../../../store/actions/cartNav'
const {cartNav}= cartNav_action 
// eslint-disable-next-line react/prop-types
function Carrito({openModal, onCloseModal}) {
  const dispatch= useDispatch()
  const navigate = useNavigate();
  //console.log("openModal", openModal);
  const [products, setProducts] = useState([])
  const user = JSON.parse(localStorage.getItem('user')) || ""
  const email = user.email
  const token = localStorage.getItem('token');
  let headers = { headers: { 'authorization': `Bearer ${token}` } }

  useEffect(() => {
      //capturar productos
      axios.get(`${apiUrl}cart/${email}`, headers)
              .then(res => setProducts(res.data.response))
              .catch(err => console.log(err))
  }, [openModal]);
  const render = () => { axios.get(`${apiUrl}cart/${email}`, headers).then(res => {setProducts(res.data.response)
       
    dispatch((cartNav({
        
        cart:res.data.response.length

    })))
    
    }).catch(err => console.log(err))}
  
    //Eliminar producto
    const deleteProduct = (product_id) => { 
      axios.delete(`${apiUrl}cart?userEmail=${email}&productId=${product_id}`, headers).then(res => {
          console.log(res)
          toast.error(res.data.message[0], {
              theme: "colored",
              })
          render()
      }).catch(err => console.log(err))
  }
  let totalPurchase = 0
  products.forEach(product => totalPurchase += (product.product_id.price * product.quantity))

  if(!openModal) return null
  return (
        <div className="fixed inset-0 overflow-hidden z-20">
          <div className="absolute inset-0 overflow-hidden z-10 flex">
                  <div className='absolute w-full h-full'
                        onClick={() => onCloseModal(false)}></div>
                  <div className="absolute right-0 flex h-full w-96 flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h1 className="text-lg font-medium text-black">Shopping cart</h1>
                        <img className='w-[35%] object-contain cursor-pointer' src="./public/images/Logos/logo-2-b.png" alt="" 
                            onClick={() => {
                              navigate(`/`)
                              onCloseModal(false)
                            }}/>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.product_id._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.product_id.photo}
                                    alt={product.product_id.photo}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div className="flex flex-col justify-evenly h-full">
                                      <p className='text-base font-medium'>{product.product_id.name}</p>
                                      <p className="px-4 font-medium w-full text-end">Price: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(product.product_id.price)} </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Quantity:  {product.quantity}</p>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-[#7847E0] hover:text-indigo-500 pr-4"
                                        onClick={()=> deleteProduct(product.product_id._id)}>Delete</button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 flex-col items-center">
                      <div className="flex justify-center text-base font-medium text-gray-900">
                        <p className='pl-3'><span>Total Purchase:</span>   {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalPurchase.toFixed(2))} </p>
                      </div>
                      <div className='w-full flex justify-evenly items-center'>
                          <div className="mt-6">
                            <button onClick={() => {
                                        navigate(`/cart/${btoa(email)}`)
                                        onCloseModal(false)
                                        }}
                              className="flex items-center justify-center rounded-md border border-transparent bg-[#7847E0] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#6847E0]"
                            >
                              Checkout
                            </button>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-400 w-full ">
                            <p>
                              or
                              <button
                                type="button"
                                className="font-medium text-[#7847E0] hover:text-[#7847E0]"
                                onClick={() => {
                                          navigate(`/`)
                                          onCloseModal(false)
                                        }}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
          </div>
            <ToastContainer
            transition={Flip}
            position="bottom-right"
            autoClose={600}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
        </div>
  )
  
}

export default Carrito;