import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import users_get from '../../store/actions/usersAdmin'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import NavigationComponent from './NavigationComponent';
const Users = () => {
    let { usersAdmin } = users_get
    const dispatch = useDispatch()
    let users = useSelector(store => store.userget.users)
    useEffect(() => {
        if (users.length === 0) {
            dispatch(usersAdmin())
           
        }
    }, [])
    console.log(users)
  return (
    <div className="h-screen flex bg-gray-100">
    <NavigationComponent/>

      
      <div className="flex-1 p-8 overflow-scroll">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <div className="grid grid-cols-5 sm:grid-cols-5">
                                <h3 className="hidden sm:block col-span-2 font-medium lg:text-xl">Name</h3>
                                <h3 className="hidden sm:block sm:pl-[1.4rem] col-span-2 font-medium lg:text-xl">Email</h3>
                                <h3 className="sm:hidden col-span-4 font-medium lg:text-xl">Name and Email</h3>
                                <h3 className="font-medium lg:text-xl">Role</h3>
                            </div>
        {users?.map((user) => (
                            <div className="py-4 w-full flex items-center" key={user.id}>
                                <img
                                    src={`${user.photo}`}
                                    alt="user_avatar"
                                    className="w-8 h-8 rounded-full mr-2 object-cover"
                                />
                                <div className="grid grid-cols-5 sm:grid-cols-5 flex-grow">
                                    <h3 className="col-span-4 sm:col-span-2 text-xs sm:text-lg">{user.name + " " + user.lastName}</h3>
                                    <p className="col-span-4 sm:col-span-2 text-xs sm:text-lg">{user.email}</p>
                                    <p className="text-xs sm:text-lg">{user.role}</p>
                                </div>
                            </div>
                        ))}
      </div>
    </div>
  );
};

export default Users;