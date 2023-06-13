import axios from 'axios'
import apiUrl from '../../../../api'
import { TbTrashX } from 'react-icons/tb'
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Favourites() {
    const { userLogin } = useSelector(store => store)
    const user = JSON.parse(localStorage.getItem('user')) || ""
    const email = userLogin.email? userLogin.email : user.email
    const [token, setToken] = useState(null)
    let headers = { headers: { 'authorization': `Bearer ${token}` } }

    const [favorites, setFavorite] = useState([])
    useEffect(() => {axios.get(`${apiUrl}favorites?userEmail=${email}`, headers).then(res => setFavorite(res.data.response)).catch(err => console.log(err))}, [])
    useEffect(() => {() => setToken(localStorage.getItem('token'))}, [])
    const reload = () => axios.get(`${apiUrl}favorites?userEmail=${email}`, headers).then(res => setFavorite(res.data.response)).catch(err => console.log(err))

    const remove = (product_id) => {
        axios.delete(`${apiUrl}favorites?userEmail=${email}&productId=${product_id}`, headers).then(res => {
                                                                                                        console.log(res.data.response)
                                                                                                        reload()
                                                                                                        toast.warn("Product removed from favorites", {
                                                                                                            theme: "colored",
                                                                                                            })
                                                                                                        }).catch(err => console.log(err))
    }
    const removeAll = () => {
        axios.delete(`${apiUrl}favorites/deleteAll?userEmail=${email}`, headers).then(res => {
                                                                                        console.log(res)
                                                                                        reload()
                                                                                        toast.warn("All product removed from favorites", {
                                                                                            theme: "colored",
                                                                                            })
                                                                                        }).catch(err => {
                                                                                            console.log(err)
                                                                                            toast.error("No product in favorites", {
                                                                                                theme: "colored",
                                                                                                })
                                                                                            })
    }

    return (
        <div className="absolute transition-all z-40 gap-3 top-[7rem] right-16 mt-2 bg-white w-[22rem] shadow-[0_5px_10px_rgba(0,0,0,0.15)] rounded-md text-[#393939] items-center flex flex-col h-fit py-[2rem]">
                    
                    {
                favorites.map((product) => (
                    <div key={product.product_id._id} className="w-[90%] cursor-pointer bg-white hover:scale-[1.03] shadow-[0_0_3px_rgba(0,0,0,0.20)] hover:shadow-[0_1px_7px_rgba(0,0,0,0.2)] rounded-md h-fit">
                        <div className="font-normal my-2 text-[#393939] flex items-center justify-between min-h-[3rem] h-fit px-3">
                            <img className="w-[2.8rem] h-[3rem] object-cover rounded-md " src={product.product_id.photo} alt="" />
                            <div className="w-[8rem]">
                                <h2 className='text-xs ml-1'>{product.product_id.name}</h2>
                            </div>
                            <div className='text-md flex justify-end pr-2 w-[6.5rem]'>
                                <p>$ {product.product_id.price}</p>
                            </div>
                        </div>
                        <div
                            className='flex text-[#ff3b3b] bg-[#faf4ec] cursor-pointer border-t-[1px] rounded-b-md justify-end text-xs items-center pr-2 h-6'>
                            <div
                            className='w-full flex items-center justify-end'
                            onClick={() => remove(product.product_id._id)}>
                                <TbTrashX className='text-[1.2rem] hover:text-[.95rem] hover:w-full hover:h-full hover:rounded-md hover:absolute bottom-0 right-0 hover:bg-[#ff3b3b81] hover:backdrop-blur-[3px]  hover:text-white' />
                            </div>
                        </div>
                    </div>
                ))
            }  

            <button className='bg-[#faf4ec] border-[1px] duration-100 hover:text-white text-sm hover:bg-[#ff4f4f] w-[7.5rem] flex items-center justify-center rounded-lg cursor-pointer h-[2rem] '
            onClick={() => removeAll()}>
                <p>Remove all</p>
            </button>
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

export default Favourites