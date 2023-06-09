import { useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../../../api"

const UserPanel = () => {
  const [idUser, setIdUser] = useState(null) 
  const user = JSON.parse(localStorage.getItem("user"))
  console.log("user", user);
  console.log("infoUser", idUser);

  useEffect(
    () => {
      /* let token = localStorage.getItem('token')
      let headers = { headers: { 'Authorization': `Bearer ${token}`} } */
        axios.get(apiUrl + `users/${user.email}`).then(res => setIdUser(res.data.response)).catch(err => console.log(err))
    },
    []
)

  return (
    <div className="w-full h-screen">
      <div className="w-32 h-32 rounded-full bg-black overflow-hidden">
        <img className="h-full object-cover" src={user?.photo} alt="" />
      </div>
      <p>{user?.name}<spam> {user?.lastName}</spam></p>
    </div>
  );
}

export default UserPanel;
