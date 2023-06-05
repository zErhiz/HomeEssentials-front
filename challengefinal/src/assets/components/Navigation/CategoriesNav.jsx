import React from 'react'
import { Link as Anchor } from 'react-router-dom'
const CategoriesNav = () => {
  return (
    <div className=' hidden lg:block h-[40px] bg-[#EDECEC] flex items-center content-center'>
    <div>
      <ul className="flex justify-start px-12 space-x-4 items-center content-center">
        <li><Anchor to="#" className="text-black hover:text-purple-600">Buy all</Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600">Categoría 2</Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600">Categoría 3</Anchor></li>
        <li><Anchor to="#" className="text-black hover:text-purple-600">Categoría 4</Anchor></li>
      </ul>
    </div>
  </div>
  )
}

export default CategoriesNav