import { useEffect } from 'react'
import logo from '../../../../public/images/Logos/logo-solid-w.png'
import { useSelector, useDispatch } from 'react-redux'
import actions from "../../../store/actions/carrito_action"

function Carrito() {
  const dispatch = useDispatch();
  const carritoItems = useSelector((store) => store.carrito);
  const { read_cart } = actions;

  useEffect(() => {
    if (!carritoItems) {
      dispatch(read_cart());
    }
  }, []);

  console.log(carritoItems);

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="absolute transition-all z-50 top-[7rem] right-0 mt-2 bg-white w-[20rem] shadow-[0_5px_10px_rgba(0,0,0,0.15)] rounded-md text-[#393939] items-center flex flex-col h-[45rem]">
      <h2 className="text-xl font-semibold">Shopping cart</h2>
      <div className="w-[90%] border border-orange-500 min-h-[70%] flex flex-col">
        <div className="w-full font-normal bg-white flex h-[3rem]">
          <img className="w-[20%] object-contain" src={logo} alt="" />
          <div className="w-[55%] bg-slate-400">
            <h2>Your Items</h2>
          </div>
          <div className='text-sm'></div>
        </div>
        <div className="border border-black">
          dasd
        </div>
      </div>
    </div>
  )
}

export default Carrito;