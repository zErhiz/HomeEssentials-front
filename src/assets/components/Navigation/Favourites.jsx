import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import apiUrl from '../../../../api'
import FavList from './FavList'

function Favourites() {

    //const dispatch = useDispatch()
    const products = useSelector(store => store.products)

    let token = localStorage.getItem('token')
    const remove = (id)=> {
       axios.post(apiUrl + '/favourites' + id)
    }

    return (
        <div className="absolute transition-all z-40 gap-3 top-[7rem] right-16 mt-2 bg-white w-[22rem] shadow-[0_5px_10px_rgba(0,0,0,0.15)] rounded-md text-[#393939] items-center flex flex-col h-fit py-[2rem]">
                    
            <FavList remove={remove} />    

            <div className='bg-[#faf4ec] border-[1px] duration-100 hover:text-white text-sm hover:bg-[#ff4f4f] w-[7.5rem] flex items-center justify-center rounded-lg cursor-pointer h-[2rem] '>
                <p>Remove all</p>
            </div>
        </div>
    )
}

export default Favourites