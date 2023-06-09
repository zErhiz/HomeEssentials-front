import { TbTrashX } from 'react-icons/tb'
import logo from '../../../../public/images/Logos/logo-solid-w.png'
import { useSelector, useDispatch } from 'react-redux'
import cards_home from '../../../store/actions/cardsHome'
import { useEffect } from 'react'


function FavList() {

    let fav
    let { cards_home_read } = cards_home
    const dispatch = useDispatch()
    let cards = useSelector(store => store.cardsHome.productsHome)
    console.log(cards)

    useEffect(() => {
        if (cards.length === 0) {
            dispatch(cards_home_read())

        }
    }, [])

    return (
        <>
            {
                cards.map((car) => (
                    <div key={car._id} className="w-[90%] cursor-pointer bg-white hover:scale-[1.03] shadow-[0_0_3px_rgba(0,0,0,0.20)] hover:shadow-[0_1px_7px_rgba(0,0,0,0.2)] rounded-md h-fit">
                        <div className="font-normal my-2 text-[#393939] flex items-center justify-between min-h-[3rem] h-fit">
                            <img className="w-[2.8rem] h-[3rem] object-cover rounded-md " src={car.photo} alt="" />
                            <div className="w-[8rem]">
                                <h2 className='text-xs ml-1'>{car.name}</h2>
                            </div>
                            <div className='text-md flex justify-end pr-2 w-[6.5rem]'>
                                <p>$ {car.price}</p>
                            </div>
                        </div>
                        <div
                            className='flex text-[#ff3b3b] bg-[#faf4ec] cursor-pointer border-t-[1px] rounded-b-md justify-end text-xs items-center pr-2 h-6'>
                            <div
                            className='w-full flex items-center justify-end'
                            onClick={() => remove(fav._id)}>
                                <TbTrashX className='text-[.85rem] hover:text-[.95rem] hover:w-full hover:h-full hover:rounded-md hover:absolute bottom-0 right-0 hover:bg-[#ff3b3b81] hover:backdrop-blur-[3px]  hover:text-white' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default FavList