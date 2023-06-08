import { useEffect } from 'react'
import logo from '../../../../public/images/Logos/logo-solid-w.png'
import { useSelector, useDispatch } from 'react-redux'

function Favourites() {

    const dispatch = useDispatch()
    const products = useSelector(store => store.products)

    useEffect()
    console.log(products)

    return (
        <div className="absolute transition-all z-50 top-[7rem] right-16 mt-2 bg-white w-[20rem] shadow-[0_5px_10px_rgba(0,0,0,0.15)] rounded-md text-[#393939] items-center flex flex-col h-[38rem]">
            <h2 className="text-xl font-semibold">Favourites</h2>
            <div className="w-[90%] bg-black min-h-[70%]">
                <div className="w-full font-normal bg-white flex h-[3rem]">
                    <img className="w-[20%] object-contain" src={logo} alt="" />
                    <div className="w-[55%] bg-slate-400">
                        <h2>Titulo</h2>
                        <p>Descripcion</p>
                    </div>
                    <div className='text-sm'>
                        <p>$ 5.000.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favourites