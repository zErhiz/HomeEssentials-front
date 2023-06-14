import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../api'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    initMercadoPago('TEST-043a661b-8206-4019-af80-17e2ff37dc98')
    const [preferenceId, setPreferenceId] = useState(false);
    const [amount, setAmount] = useState(0);


    
    const handlePayment = async (amount) => {
        try {
            const response = await axios.post(`${apiUrl}payment`, {
                unit_price: amount,
            });
            const preferenceId = response.data.preferenceId;

            setPreferenceId(preferenceId);

            setAmount(amount)
        } catch (error) {
            console.error(error);
        }
    };
    let navigate=useNavigate()
    const params = useParams()
    const email = atob(params.email)
    const [products, setProducts] = useState([])
    const token = localStorage.getItem('token')
    let headers = { headers: { 'authorization': `Bearer ${token}` } }
    let totalPurchase = 0
    
    //capturar productos
    useEffect(() => {
        axios.get(`${apiUrl}cart/${email}`, headers)
                .then(res => setProducts(res.data.response))
                .catch(err => console.log(err))}, []
    )
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
    
    products.forEach(product => totalPurchase += (product.product_id.price * product.quantity))
    const render = () => { axios.get(`${apiUrl}cart/${email}`, headers).then(res => setProducts(res.data.response)).catch(err => console.log(err))}

    return (
        <div className="w-full min-h-[85vh] flex flex-col items-center">
            <div className='w-[90%] max-w-[1024px] min-h-[70vh] mt-10 flex flex-col items-center bg-[#E7E7E7] rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.56)] relative'>
                <div className='w-full flex items-center flex-col pb-56'>
                    <p className='p-4 pl-12 pt-10 w-[90%] border-b-2 border-b-[#7847E0] text-lg font-medium text-[#7847E0] mb-5'>Carrito ({products?.length})</p>
                        {products.length > 0 ? 
                        (products?.map(product => {
                            return <div className='pl-4 pt-5 flex flex-col justify-start items-center w-[90%] border-b-2 border-white'
                            key={product.product_id._id}>
                            <div className='flex justify-start items-center w-full flex-col sm:flex-row'>
                                <div className='w-full sm:w-7/12 flex'>
                                    <button className='w-[120px] h-24 overflow-hidden shadow-[0px_0px_5px_rgba(0,0,0,0.56)]' onClick={()=>navigate(`/products/${product.product_id._id}`)}>
                                        <img className='w-full h-full object-cover ' src={product.product_id.photo} alt="" />
                                    </button>
                                    <div className='w-5/6 sm:w-4/6 pr-2 flex flex-col'>
                                        <button className='w-full flex text-start' onClick={()=>navigate(`/products/${product.product_id._id}`)}>
                                        <p className='pl-10 text-xl font-medium'>{product.product_id.name}</p></button>
                                        <p className='pl-10 text-sm font-small'>{product.product_id.description}</p> 
                                    </div>
                                </div>
                                <div className='w-full sm:w-5/12 flex justify-between pt-5 sm:pt-0'>
                                    <div className='w-4/6 sm:w-2/6 flex sm:flex-col border-r-2 border-gray-300 mr-5 sm:border-none sm:mr-0 sm: pr-0'>
                                        <div className='w-full h-3/4 flex flex-row justify-evenly items-center  border border-gray-200'>
                                            <button className='w-2/6 text-2xl font-medium pb-1 hover:text-red-600 hover:font-semibold'
                                                    onClick={()=> substractProduct(product.product_id._id)}>–</button>
                                            <p className='w-2/6 text-xl text-center'>{product.quantity}</p>
                                            <button className='w-2/6 text-2xl font-medium pb-1 hover:text-blue-600 hover:font-bold'
                                                    onClick={()=> addProduct(product.product_id._id)}>+</button>
                                        </div>
                                        <p className='text-center text-gray-500'>{`${product.product_id.stock_Available} availables`}</p>
                                    </div>
                                    <p className='w-2/6 sm:w-4/6 flex items-center justify-center text-xl font-medium'>USD {(product.product_id.price * product.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                            <div className='w-full sm:w-[90%] py-5 sm:pl-10 sm:p-5 flex justify-between sm:justify-start'>
                                <button className='text-red-600 font-medium border border-red-600 px-5 rounded-full hover:bg-red-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.56)]'
                                                onClick={()=> deleteProduct(product.product_id._id)}>Delete</button>
                                <button className='ml-10 font-medium text-blue-600 border border-blue-600 px-5 rounded-full 
                                                hover:bg-blue-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.56)]'
                                        onClick={()=>navigate(`/allproducts`)}>More Products
                                </button>
                            </div>
                        </div>})
                        ): (
                            <div className='w-[80%]'>
                                <div className='pt-5 flex flex-row justify-center items-center w-full min-h-[30vh]'>
                                    <img className='h-[30vh] w-40' src="/shopping.png" alt="" />
                                    <div className='h-[30vh] flex flex-col items-center justify-center'>
                                        <p className='text-2xl font-medium px-10 py-5'>Nothing here... come back to see available products</p>
                                        <p className='text-2xl px-10 py-5'>Come back to see available products</p>
                                        <button className='font-medium text-blue-600 border border-blue-600 px-12 py-2 rounded-full 
                                                        hover:bg-blue-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.56)] my-5 text-xl'
                                                onClick={()=>navigate(`/allproducts`)}>More Products
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                            

                </div>
                <div className='absolute bottom-0 flex w-full flex-col items-center'>
                    <div className='w-[90%] h-28 flex items-center justify-end pr-10 border-y-2 border-white bg-[#E7E7E7]'>
                        <p className='text-2xl font-medium'><span className='mr-4'>Total Purchase:</span>  USD {totalPurchase.toFixed(2)}</p>
                    </div>
                    <div className="w-[90%] h-28 flex items-center justify-end pr-10">
                        <button 
                            type="submit"
                            onClick={()=>handlePayment(totalPurchase.toFixed(2)) }
                            className="px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-900 to-purple-600 
                                        rounded-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline">
                            Proccess payment
                        </button>
                        <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }} />
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
