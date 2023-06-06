import React from 'react'
import { Link as Anchor } from 'react-router-dom';

export default function AdminPanel() {
    return (
        <div className="container sm:p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 lg:text-3xl">Admin Panel</h1>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 w-full justify-items-center">
                <div className="bg-purple-400 opacity-90 text-white p-2 sm:p-4 rounded shadow-lg w-full lg:w-5/6 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold mb-4 lg:text-2xl">User List</h2>
                    <div className="w-full divide-y divide-white">
                        <div className="py-2 w-full">
                            <div className="grid grid-cols-5 sm:grid-cols-6">
                                <h3 className="font-medium hidden sm:block lg:text-xl">Avatar</h3>
                                <h3 className="col-span-2 font-medium lg:text-xl">Name</h3>
                                <p className="col-span-2 font-medium lg:text-xl">Email</p>
                                <p className="font-medium lg:text-xl">Role</p>
                            </div>
                        </div>
                        {/* Agregar más */}
                        <div className="py-2 w-full">
                            <div className="grid grid-cols-5 sm:grid-cols-6">
                                <img
                                    src="user-avatar.jpg"
                                    alt="user_avatar"
                                    className="hidden sm:block w-8 h-8 rounded-fdivl mr-2"
                                />
                                <h3 className="col-span-2 text-xs text-black lg:text-lg">Name Surname</h3>
                                <p className="col-span-2 text-xs text-black lg:text-lg">Email@example.com</p>
                                <p className="text-xs text-black lg:text-lg">User</p>
                            </div>
                        </div>
                        <div className="py-2 w-full">
                            <div className="grid grid-cols-5 sm:grid-cols-6">
                                <img
                                    src="user-avatar.jpg"
                                    alt="user_avatar"
                                    className="hidden sm:block w-8 h-8 rounded-fdivl mr-2"
                                />
                                <h3 className="col-span-2 text-xs text-black lg:text-lg">Name Surname</h3>
                                <p className="col-span-2 text-xs text-black lg:text-lg">Email@example.com</p>
                                <p className="text-xs text-black lg:text-lg">User</p>
                            </div>
                        </div>
                        <div className="py-2 w-full">
                            <div className="grid grid-cols-5 sm:grid-cols-6">
                                <img
                                    src="user-avatar.jpg"
                                    alt="user_avatar"
                                    className="hidden sm:block w-8 h-8 rounded-fdivl mr-2"
                                />
                                <h3 className="col-span-2 text-xs text-black lg:text-lg">Name Surname</h3>
                                <p className="col-span-2 text-xs text-black lg:text-lg">Email@example.com</p>
                                <p className="text-xs text-black lg:text-lg">User</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-400 opacity-90 text-white p-2 sm:p-4 rounded shadow-lg w-full sm:w-2/3 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold mb-4 sm:text-2xl">On Sale List</h2>
                    <div className="divide-y divide-white sm:w-full">
                        <div className="py-2 sm:w-full">
                            <div className="flex items-center sm:justify-evenly">
                                <img
                                    src=""
                                    alt="article_photo"
                                    className="w-12 h-12 rounded mr-4"
                                />
                                <div className='sm:flex justify-center items-center sm:gap-4'>
                                    <h3 className="font-medium">Article name</h3>
                                    <p className="text-xs sm:text-base font-medium text-black">Actual Price: $100</p>
                                    <div className="flex items-center mt-2 sm:mt-0">
                                        <input
                                            type="number"
                                            className="w-16 px-2 py-1 border rounded mr-2 text-black"
                                        />
                                        <span>%</span>
                                        <button className="ml-4 bg-purple-600 text-white px-4 py-1 rounded">
                                            Give discount
                                        </button>
                                    </div>
                                    <p className="text-xs sm:text-base font-medium text-black mt-2 sm:mt-0">
                                        New Price: $80
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Agrega más elementos de la lista de descuentos aquí */}
                        <div className="py-2 sm:w-full">
                            <div className="flex items-center sm:justify-evenly">
                                <img
                                    src=""
                                    alt="article_photo"
                                    className="w-12 h-12 rounded mr-4"
                                />
                                <div className='sm:flex justify-center items-center sm:gap-4'>
                                    <h3 className="font-medium">Article name</h3>
                                    <p className="text-xs sm:text-base font-medium text-black">Actual Price: $100</p>
                                    <div className="flex items-center mt-2 sm:mt-0">
                                        <input
                                            type="number"
                                            className="w-16 px-2 py-1 border rounded mr-2 text-black"
                                        />
                                        <span>%</span>
                                        <button className="ml-4 bg-purple-600 text-white px-4 py-1 rounded">
                                            Give discount
                                        </button>
                                    </div>
                                    <p className="text-xs sm:text-base font-medium text-black mt-2 sm:mt-0">
                                        New Price: $80
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 sm:w-full">
                            <div className="flex items-center sm:justify-evenly">
                                <img
                                    src=""
                                    alt="article_photo"
                                    className="w-12 h-12 rounded mr-4"
                                />
                                <div className='sm:flex justify-center items-center sm:gap-4'>
                                    <h3 className="font-medium">Article name</h3>
                                    <p className="text-xs sm:text-base font-medium text-black">Actual Price: $100</p>
                                    <div className="flex items-center mt-2 sm:mt-0">
                                        <input
                                            type="number"
                                            className="w-16 px-2 py-1 border rounded mr-2 text-black"
                                        />
                                        <span>%</span>
                                        <button className="ml-4 bg-purple-600 text-white px-4 py-1 rounded">
                                            Give discount
                                        </button>
                                    </div>
                                    <p className="text-xs sm:text-base font-medium text-black mt-2 sm:mt-0">
                                        New Price: $80
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}