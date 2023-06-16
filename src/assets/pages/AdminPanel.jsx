import axios from 'axios';
import apiUrl from '../../api';
import { useState, useEffect } from 'react';

export default function AdminPanel() {
    const [users, setUser] = useState([])
    const [categories, setCategories] = useState([])
    //console.log(users)
    //console.log(categories)

    useEffect(() => {
        Promise.all([
            axios(apiUrl + 'users'),
            axios(apiUrl + 'categories')
        ])
            .then(([usersRes, categoriesRes]) => {
                setUser(usersRes.data.users);
                setCategories(categoriesRes.data.categories);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div className="container sm:p-4 flex flex-col items-center bg-[#E0E7F1]">
            <h1 className="text-2xl font-bold mb-4 lg:text-3xl">Admin Panel</h1>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 w-full justify-items-center text-[#393939]">
            <div className="bg-white p-2 sm:p-4 rounded shadow-lg w-full lg:w-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold mb-4 lg:text-2xl">User List</h2>
                    <div className="w-full divide-y divide-[#393939] p-4 sm:p-8">
                        <div className="py-2 w-full">
                            <div className="grid grid-cols-5 sm:grid-cols-5">
                                <h3 className="hidden sm:block col-span-2 font-medium lg:text-xl">Name</h3>
                                <h3 className="hidden sm:block sm:pl-[1.4rem] col-span-2 font-medium lg:text-xl">Email</h3>
                                <h3 className="sm:hidden col-span-4 font-medium lg:text-xl">Name and Email</h3>
                                <h3 className="font-medium lg:text-xl">Role</h3>
                            </div>
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


                <div className="bg-white p-2 sm:p-4 rounded shadow-lg w-full lg:w-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold mb-4 sm:text-2xl">Off Sale List</h2>
                    <div className="divide-y divide-white sm:w-full p-4 sm:p-8">
                        {categories?.map((category) => (
                            <>
                                <div className="py-2 sm:w-full sm:h-[15vh] sm:flex items-center justify-center" style={{backgroundColor: category.hover}}>
                                    <div className="sm:w-full flex items-center sm:justify-between px-2 sm:px-8">
                                        <img
                                            src={`${category.coverPhoto}`}
                                            alt="article_photo"
                                            className="w-12 h-12 sm:w-[10vw] sm:h-[10vh] rounded mr-4 object-cover"
                                        />
                                        <div className='sm:flex justify-center items-center sm:gap-4 sm:p-0'>
                                            <h3 className="font-medium" style={{color: category.color}}> {category.name}</h3>
                                            <p className="text-xs sm:text-base font-medium text-white">Actual Price: $100</p>
                                            <div className="flex items-center mt-2 sm:mt-0">
                                                <input
                                                    type="number"
                                                    className="w-16 px-2 py-1 border rounded mr-2"
                                                />
                                                <span className='text-white'>%</span>
                                                <button className="ml-2 sm:ml-4 text-white px-0 sm:px-4 sm:py-1 rounded" style={{backgroundColor: category.color}}>
                                                    Give discount
                                                </button>
                                            </div>
                                            <p className="text-xs sm:text-base font-medium  mt-2 sm:mt-0 text-white">
                                                New Price: $80
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}