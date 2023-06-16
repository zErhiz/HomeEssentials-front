import { useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../../../api"
import { uploadFile } from "../../../firebase";
import Grid from "react-loading-icons/dist/esm/components/grid";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const UserPanel = () => {
  let navigate=useNavigate()
  const [infoUser, setInfoUser] = useState(null) 
  const user = JSON.parse(localStorage.getItem("user"))
  //console.log("user", user);
  //console.log("infoUser", infoUser);
  const token = localStorage.getItem("token");
  let headers = { headers: { 'authorization': `Bearer ${token}` } }

  const [favorites, setFavorite] = useState([])
  useEffect(() => {axios.get(`${apiUrl}favorites?userEmail=${email}`, headers).then(res => setFavorite(res.data.response)).catch(err => console.log(err))}, [])
  useEffect(
    () => {
      /* let token = localStorage.getItem('token')
      let headers = { headers: { 'Authorization': `Bearer ${token}`} } */
        axios.get(apiUrl + `users/${user.email}`).then(res => setInfoUser(res.data.response)).catch(err => console.log(err))
    },
    []
)

  const [name, setName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [img, setImg] = useState(null)
  const [buttonSend, setButtonSend] = useState(false)
  let [loading, setLoading] = useState(false)
  //console.log(name);

  const data = {}

  const handleForm = () => {
    name ? data.name = name : ""
    lastName ? data.lastName = lastName : ""
    email ? data.email = email : ""
    password ? data.password = password : ""
    img ? data.photo = img : ""
    console.log(data);

    let token = () => localStorage.getItem('token')
    let headers = { headers: { 'authorization': `Bearer ${token()}` } }
    axios.post(apiUrl + `users/${infoUser._id}`, data, headers).then(res => {
                                                                      setInfoUser(res.data.response)
                                                                      console.log(res.data.message);
                                                                      toast.success(res.data.message, {
                                                                        theme: "colored",
                                                                        })
                                                                    }).catch(err => console.log(err))
  }
  const handleSubmit = async (img) => {
    try {
        setLoading(true)
        setButtonSend(true)
        const result = await uploadFile(img, "imgCV/")
        setImg(result)
        if(result) {
            setButtonSend(false)
        }
        setLoading(false) 
    } catch (error) {
        console.log(error);
    }
}


  return (
    <div className='bg-[#E7E7E7] flex h-screen flex-col justify-center items-center mt-12 sm:mt-0'>
      {!loading ? (<></>) : (<Grid className="fixed bg-[#00000073] p-2 rounded-lg"/>)}

            <div className="sm:w-[70vw] p-16 py-24 rounded-lg shadow-lg bg-[#fff] flex flex-col lg:flex-row">
              <div className="w-full lg:w-[40%] flex flex-col sm:flex-row lg:flex-col items-center justify-center">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full rounded-lg cursor-pointer">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                      <img src={!img? infoUser?.photo : img} alt="" className="w-40 h-40 rounded-full object-cover" />
                                    </div>
                                    <input id="dropzone-file" 
                                            type="file" 
                                            onChange={e => handleSubmit(e.target.files[0])} 
                                            className="hidden" />
                                    </label>
                <div className="flex flex-col px-2">
                  <p className="my-1 2xl:text-xl text-sm font-normal"> {infoUser?.name}</p>
                  <p className="my-1 2xl:text-xl text-sm font-normal"> {infoUser?.lastName}</p>
                  <p className="my-1 2xl:text-xl text-sm font-normal"> {infoUser?.email}</p>
                </div>
              </div>
              <form onSubmit={(e)=> {
                                e.target.reset()
                                e.preventDefault()
                                handleForm()
              }} className="w-full text-[#7847E0] lg:w-1/2 h-[22rem] flex flex-col justify-between">
                  <h2 className="bock text-start text-gray-700 text-lg">Edit data</h2>
                  <div className="mb-4 flex border border-[#7847E0] rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold">
                          Name:
                      </label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="name"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New name"/>
                  </div>
                  <div className="mb-4 flex border border-[#7847E0] rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold">
                          Last Name:
                      </label>
                        <input
                          onChange={(e) => setLastName(e.target.value)}
                          type="lastName"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New Last Name"/>
                  </div>
                  <div className="mb-4 flex border border-[#7847E0] rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold" htmlFor="email">
                          Email:
                      </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New Email"/>
                  </div>
                  <div className="mb-4 flex border border-[#7847E0] rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold" htmlFor="password">
                          Password:
                      </label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New Password"/>
                  </div>
                  <div className="flex items-center justify-center">
                      <button
                          disabled={buttonSend} 
                          type="submit"
                          className="px-4 py-2 font-bold text-white bg-gradient-to-r from-[#7847E0] to-purple-500 
                                      rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline">
                          Saved Changes
                      </button>
                  </div>
              </form>
            </div>
            {favorites.length < 0 && <div><div className='flex justify-center items-center pb-4'>
              <h3 className='font-bold text-gray-700 text-3xl mt-16'>Your favorites</h3>
            </div>
            <div className="p-4 sm:w-[70vw] rounded-lg shadow-lg flex flex-col lg:flex-row flex-wrap justify-evenly">
            {favorites.map((product) => (
                    <div key={product.product_id._id} className="mb-10 cursor-pointer bg-white hover:scale-[1.03] shadow-[0_0_3px_rgba(0,0,0,0.20)] hover:shadow-[0_1px_7px_rgba(0,0,0,0.2)] rounded-md h-fit">
                        <div className="font-normal my-2 text-[#393939] flex items-center justify-between min-h-[3rem] h-fit px-3">
                            <img className="w-[6rem] h-[6rem] object-cover rounded-md " src={product.product_id.photo} alt="" />
                            <div className="w-[8rem]">
                                <h2 className='text-xs ml-1'>{product.product_id.name}</h2>
                            </div>
                            <div className='text-md flex justify-end pr-2 w-[6.5rem]'>
                                <p>$ {product.product_id.price}</p>
                            </div>
                        </div>
                        <div
                            className='flex text-[#ff3b3b] bg-[#faf4ec] cursor-pointer border-t-[1px] rounded-b-md justify-end text-xs items-center pr-2 h-6'>
                        </div>
                    </div>
                ))}
            </div></div>}
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

export default UserPanel;
