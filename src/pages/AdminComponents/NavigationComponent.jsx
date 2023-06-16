import React from 'react'
import { Link as Anchor } from 'react-router-dom'
const NavigationComponent = () => {
  return (
    <>
     {/* Barra de al lado */}
     <div className="w-28 md:w-64 bg-white border-r">
        <div className="h-20 flex items-center justify-center">
          <h1 className="text-md md:text-2xl font-bold">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul>
            <Anchor to="/admin">
              <li className="text-sm md:text-xl  px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Curriculums
              </li>
            </Anchor>
            <Anchor to="/admin/products">
              <li className="text-sm md:text-xl  px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Products
              </li>
            </Anchor>
            <Anchor to="/admin/order">
              <li className="text-sm md:text-xl  px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Orders
              </li>
            </Anchor>
            <Anchor to="/admin/users">
              <li className="text-sm md:text-xl  px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Users
              </li>
            </Anchor>
            <Anchor to="/admin/contact">
              <li className="text-sm md:text-xl px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Contact
              </li>
            </Anchor>
          </ul>
        </nav>
      </div>

    
    </>
  )
}

export default NavigationComponent