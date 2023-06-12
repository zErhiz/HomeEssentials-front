import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../api'
import { ToastContainer, toast, Flip } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    let navigate=useNavigate()
    const params = useParams()
    const email = atob(params.email)
    const [products, setProducts] = useState([])
    console.log(products);
    let totalPurchase = 0
    products.forEach(product => totalPurchase += (product.product_id.price * product.quantity))
    const [token, setToken] = useState(null)
    let headers = { headers: { 'authorization': `Bearer ${token}` } }
    
    const render = () => { axios.get(`${apiUrl}cart/${email}`, headers).then(res => setProducts(res.data.response)).catch(err => console.log(err))}
    useEffect(() => {() => setToken(localStorage.getItem('token'))}, [])

    useEffect(() => {
        axios.get(`${apiUrl}cart/${email}`, headers)
                .then(res => setProducts(res.data.response))
                .catch(err => console.log(err))}, [])
    
    //agregar producto
    const addProduct = (product_id) => {
        const data = {userEmail: email, productId: product_id}
        axios.post(`${apiUrl}cart/create`, data, headers).then(res => {
            console.log(res)
            toast.success(res.data.message[0], {
                theme: "colored",
                })
            render()
        }).catch(err => {
            console.log(err)
            toast.error(err.response.data.message[0], {
                theme: "colored",
                });})
    }
    //Restar producto
    const substractProduct = (product_id) => { 
        const data = {userEmail: email, productId: product_id}
        axios.put(`${apiUrl}cart/subtract`, data, headers).then(res => {
            console.log(res)
            toast.warn(res.data.message[0], {
                theme: "colored",
                })
            render()
        }).catch(err => console.log(err))
    }
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
    //finalizar compra
    /* const purchase = () => { 
        toast('Unit deleted');
        axios.post(`${apiUrl}cart/confirm?userEmail=${email}`, headers).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    } */
    
    return (
        <div className="w-full min-h-[85vh] flex flex-col items-center">
            <div className='w-[90%] max-w-[1024px] min-h-[70vh] mt-10 flex flex-col items-center bg-[#E7E7E7] rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.56)] relative'>
                <div className='w-full flex items-center flex-col pb-56'>
                    <p className='p-4 pl-12 pt-10 w-[90%] border-b-2 border-b-[#7847E0] text-lg font-medium text-[#7847E0] mb-5'>Carrito ({products?.length})</p>

                        {products?.map(product => {
                            return <div className='pl-4 pt-5 flex flex-col justify-start items-center w-[90%] border-b-2 border-white'
                            key={product.product_id._id}>
                            <div className='flex justify-start items-center w-full'>
                                <button className='w-2/12 h-24 overflow-hidden shadow-[0px_0px_5px_rgba(0,0,0,0.56)]' onClick={()=>navigate(`/products/${product.product_id._id}`)}>
                                <img className='w-full h-full object-cover ' src={product.product_id.photo} alt="" /></button>
                                <div className='w-5/12 flex flex-col'>
                                    <button className='w-full flex' onClick={()=>navigate(`/products/${product.product_id._id}`)}>
                                    <p className='pl-10 text-xl font-medium'>{product.product_id.name}</p></button>
                                    <p className='pl-10 text-sm font-small'>{product.product_id.description}</p> 
                                </div>
                                <div className='w-2/12 flex flex-col'>
                                    <div className='w-full h-3/4 flex flex-row justify-evenly items-center  border border-gray-200'>
                                        <button className='w-2/6 text-2xl font-medium pb-1 hover:text-red-600 hover:font-semibold'
                                                onClick={()=> substractProduct(product.product_id._id)}>–</button>
                                        <p className='w-2/6 text-xl text-center'>{product.quantity}</p>
                                        <button className='w-2/6 text-2xl font-medium pb-1 hover:text-blue-600 hover:font-bold'
                                                onClick={()=> addProduct(product.product_id._id)}>+</button>
                                    </div>
                                    <p className='text-center text-gray-500'>{`${product.product_id.stock_Available} availables`}</p>
                                </div>
                                <p className='w-4/12 flex items-center justify-center text-xl font-medium'>USD {(product.product_id.price * product.quantity).toFixed(2)}</p>
                            </div>
                            <div className='w-[90%] pl-10 p-5'>
                                <button className='text-red-600 font-medium border border-red-600 px-5 rounded-full hover:bg-red-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.56)]'
                                                onClick={()=> deleteProduct(product.product_id._id)}>Delete</button>
                                <button className='ml-10 font-medium text-blue-600 border border-blue-600 px-5 rounded-full 
                                                hover:bg-blue-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.56)]'
                                        onClick={()=>navigate(`/allproducts`)}>More Products
                                </button>
                            </div>
                        </div>})}

                </div>
                <div className='absolute bottom-0 flex w-full flex-col items-center'>
                    <div className='w-[90%] h-28 flex items-center justify-end pr-10 border-y-2 border-white bg-[#E7E7E7]'>
                        <p className='text-2xl font-medium'><span className='mr-4'>Total Purchase:</span>  USD {totalPurchase.toFixed(2)}</p>
                    </div>
                    <div className="w-[90%] h-28 flex items-center justify-end pr-10">
                        <button
                            type="submit"
                            onClick={()=> navigate('/paymentpage')}
                            className="px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-900 to-purple-600 
                                        rounded-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline">
                            Proceed to checkout
                        </button>
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
    );
}

export default Cart;
