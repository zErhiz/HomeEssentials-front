import { useEffect, useRef, useState} from "react";
import categories_actions from '../../../store/actions/categories'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import products_actions from '../../../store/actions/products'

const CategoriesNav = () => {
  let navigate = useNavigate()
  let { categories_read } = categories_actions
  let { products_read } = products_actions
  const dispatch = useDispatch()
  let categories = useSelector(store => store.categories.categories)
  let manufacturers = useSelector(store => store.manufacturerHome.manufacturers)
  console.log(manufacturers);

  //
  const [filterPrice , setFilterPrice] = useState(1)
  //capturar categorias chekeadas
  const category_id = useRef('')
  const [ categoriesCheked, setCategoriesCheked ] = useState([])
  function capture(){
    const categoriesFilter = Object.values(category_id.current).filter(each => each.checked).map(each => each.value)
    setCategoriesCheked(categoriesFilter)
}
  //capturar empresas chekeadas
  const manufacturer_id = useRef('')
  const [ manufacturerCheked, setManufacturerCheked ] = useState([])
  function captureManufacturer(){
    const manufacturerFilter = Object.values(manufacturer_id.current).filter(each => each.checked).map(each => each.value)
    setManufacturerCheked(manufacturerFilter)
}
//console.log("manufacturerCheked", manufacturerCheked);
//mostrar listas
const [ viewCategories , setViewCategories ] = useState(false)
const [ viewManufacturers , setViewManufacturers ] = useState(false)
const [ viewPrice , setViewPrice ] = useState(false)

useEffect(() => {
  if (categories.length === 0) {
    dispatch(categories_read())
  }
}, [])

useEffect(() => {
      dispatch(products_read({categoriesCheked , manufacturerCheked , filterPrice}))
}, [categoriesCheked, manufacturerCheked, filterPrice])

  return (
    <div className='h-[60px] bg-[#7847E0] hidden lg:flex items-center content-center pl-5'>
      {viewCategories||viewManufacturers||viewPrice? (
        <div className="fixed top-0 left-0 h-screen w-screen z-10"
        onClick={()=> {setViewManufacturers(false), setViewCategories(false), setViewPrice(false)}}></div>
      ) : null}
      <button
        className="text-white font-medium w-44 mx-4 py-1 rounded-md shadow-inner hover:shadow-black border border-white z-10"
        onClick={()=> {
          navigate(`/allproducts`)
          setCategoriesCheked([])
          setManufacturerCheked([])
          setFilterPrice(1)
        }}>
        View All Products
      </button>
      <div className="w-46 mx-4 h-full relative flex items-center justify-center z-10">
        <button
          className="text-white font-medium w-44 mx-2 py-1 rounded-md shadow-inner hover:shadow-black border border-white"
          onClick={(e)=> { e.preventDefault(), setViewPrice(!viewPrice), navigate(`/allproducts`)}}>
          Filter by Price
        </button>
        {viewPrice? 
        (<ul className="absolute bg-[#7847E0] top-8 flex flex-col justify-start w-56 pb-4 mt-7 items-center content-center flex-wrap h-fit z-30 text-white font-medium rounded-b-xl">
            <button onClick={()=> setFilterPrice(1)}
                    className="cursor-pointer p-2 hover:border-b hover:border-white hover:bg-[#7847E0] w-full rounded-b-2xl hover:font-bold text-center">
            Least to Greatest
            </button>
            <button onClick={()=> setFilterPrice(-1)}
                    className="cursor-pointer p-2 hover:border-b hover:border-white hover:bg-[#7847E0] w-full rounded-b-2xl hover:font-bold text-center">
            Greatest to Least
            </button>
        </ul>
        ) : null}
      </div>
      <form ref={manufacturer_id} className="w-46 mx-4  h-full relative flex items-center justify-center z-10">
        <button
          className="text-white font-medium w-44 mx-2 py-1 rounded-md shadow-inner hover:shadow-black border border-white"
          onClick={(e)=> {e.preventDefault(), setViewManufacturers(!viewManufacturers), navigate(`/allproducts`)}}>
          Filter by Manofacturers
        </button>
          {viewManufacturers? 
          (<ul className="absolute bg-[#7847E0] top-8 flex flex-col justify-start w-56 pb-4 mt-7 items-center content-center flex-wrap h-fit z-30 text-white font-medium rounded-b-xl">
            {manufacturers.map((manufacturer) =>
                              <label htmlFor={manufacturer._id} key={manufacturer._id}
                              className="cursor-pointer p-2 hover:border-b hover:border-white hover:bg-[#7847E0] w-full rounded-b-2xl hover:font-bold text-center"
                              style={{...(manufacturerCheked.includes(manufacturer._id)? {color: "black", borderBottom: '2px solid red', borderColor: "white", fontWeight: 'bold'} : {}) }}>
                              {manufacturer.name}
                              <input name="category_id" 
                                      onClick={captureManufacturer} 
                                      defaultChecked={categories.includes(manufacturer._id)} 
                                      style={{ appearance: 'none' }}
                                      type="checkbox" 
                                      value={manufacturer._id} 
                                      id={manufacturer._id} />
                                </label>)}
        </ul>
        ) : null}
      </form>
      <form ref={category_id} className="w-46 mx-4  h-full relative flex items-center justify-center z-10">
        <button
          className="text-white font-medium w-44 mx-2 py-1 rounded-md shadow-inner hover:shadow-black border border-white"
          onClick={(e)=> {e.preventDefault(), setViewCategories(!viewCategories), navigate(`/allproducts`)}}>
          Filter by Categories
        </button>
        {viewCategories? 
        (<ul className="absolute bg-[#7847E0] top-8 flex flex-col justify-start w-56 pb-4 mt-7 items-center content-center flex-wrap h-fit z-30 text-white font-medium rounded-b-xl">
          {categories.map((category) =>
                              <label htmlFor={category._id} key={category._id}
                              className="cursor-pointer p-2 hover:border-b hover:border-white hover:bg-[#7847E0] w-full rounded-b-2xl hover:font-bold text-center"
                              style={{...(categoriesCheked.includes(category._id)? {color: "black", borderBottom: '2px solid red', borderColor: "white", fontWeight: 'bold'} : {}) }}>
                              {category.name}
                              <input name="category_id" 
                                      onClick={capture} 
                                      defaultChecked={categories.includes(category._id)} 
                                      style={{ appearance: 'none' }}
                                      type="checkbox" 
                                      value={category._id} 
                                      id={category._id} />
                                </label>)}
        </ul>
                                ) : null}
      </form>
    </div>
  )
}

export default CategoriesNav