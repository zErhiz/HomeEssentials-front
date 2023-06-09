import { useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../../../api"

const UserPanel = () => {
  const [infoUser, setInfoUser] = useState(null) 
  const user = JSON.parse(localStorage.getItem("user"))
  console.log("user", user);
  console.log("infoUser", infoUser);

  useEffect(
    () => {
      /* let token = localStorage.getItem('token')
      let headers = { headers: { 'Authorization': `Bearer ${token}`} } */
        axios.get(apiUrl + `users/${user.email}`).then(res => setInfoUser(res.data.response)).catch(err => console.log(err))
    },
    []
)

/*   const [name, setName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [img, setImg] = useState(null)

  const data = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    img: img,
  } */

  return (
    <div className='bg-[#FFFFFF] p-4 h-[80vh] flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center pb-4'>
              <h3 className='font-bold text-gray-700 text-3xl'>User Panel</h3>
            </div>
            <div className="p-4 sm:w-[70vw] rounded-lg shadow-lg bg-[#E7E7E7] flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col sm:flex-row lg:flex-col items-center justify-evenly">
                <img src={infoUser?.photo} alt="" className="w-40 h-40 rounded-full object-cover" />
                <div className="lg:w-full lg:px-2 px-2">
                  <p className="my-4 text-xl font-semibold flex flex-col">Name: <spam className="font-normal">{infoUser?.name}</spam></p>
                  <p className="my-4 text-xl font-semibold flex flex-col">Last Name: <spam className="font-normal">{infoUser?.lastName}</spam></p>
                  <p className="my-4 text-xl font-semibold flex flex-col">Email:  <spam className="font-normal">{infoUser?.email}</spam></p>
                </div>
              </div>
              <form className="w-full lg:w-1/2 h-full flex flex-col justify-around">
                  <h2 className="bock text-center font-bold text-gray-700 text-2xl mb-4">Edit data</h2>
                  <div className="mb-4 flex border border-purple-900 rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold" htmlFor="name">
                          Name:
                      </label>
                        <input
                          type="name"
                          id="name"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New name"
                          required/>
                  </div>
                  <div className="mb-4 flex border border-purple-900 rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold" htmlFor="lastName">
                          Last Name:
                      </label>
                        <input
                          type="lastName"
                          id="lastName"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New Last Name"
                          required/>
                  </div>
                  <div className="mb-4 flex border border-purple-900 rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold" htmlFor="email">
                          Email:
                      </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New Email"
                          required/>
                  </div>
                  <div className="mb-4 flex border border-purple-900 rounded-lg">
                      <label className="w-1/2 px-3 py-2 font-semibold" htmlFor="password">
                          Password:
                      </label>
                        <input
                          type="password"
                          id="password"
                          className="w-full px-3 py-2 appearance-none focus:outline-none focus:shadow-outline  rounded-r-lg"
                          placeholder="New Password"
                          required/>
                  </div>
                  <div className="flex items-center justify-center">
                      <button
                          type="submit"
                          className="px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-900 to-purple-600 
                                      rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline">
                          Saved Changes
                      </button>
                  </div>
              </form>
            </div>
        </div>
  );
}

export default UserPanel;
