import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../../api';
const Products = () => {
    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        axios(`${apiUrl}products/sixcards?page=${page}`)
          .then(res => {
            setProductData(res.data)
           
          })
          .catch(err => console.log(err))
      }, [page])
      console.log(productData)

      function HandleArrowNext() {
        if (productData.length === 0) {
        
          return;
        }
      
        const totalPages = productData.totalPages;
      
        if (page < totalPages) {
          // Si la página actual es menor que la última página, incrementa la página
          setPage(prevPage => prevPage + 1);
        }
      }
      function HandleArrowPrev() {
        if (page > 1) {
          // Si la página actual es mayor que 1, decrementa la página
          setPage(prevPage => prevPage - 1);
        }
      }
      const imageStyle = "h-[100%] w-[100%] object-cover  cursor-pointer";
let productosAdmin = productData.products


const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    price_offer: '',
    percentage_offer: '',
    photo: '',
    stock_Available: '',
    category_id: '',
    manufacturer_id: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8000/admin/products', formData)
      .then((response) => {
        console.log(response.data);
       
      })
      .catch((error) => {
        console.error(error);
        
      });
  };


  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };





















  return (
    <div className="h-screen flex bg-gray-100">
      {/* Barra de al lado */}
      <div className="w-64 bg-white border-r">
   
        <div className="h-20 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="py-4">
        <ul>
          <Anchor to="/admin"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Dashboard
            </li>
            </Anchor>
            <Anchor to="/admin/products"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Products
            </li>
            </Anchor>
            <Anchor to="/admin/order"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Orders
            </li>
            </Anchor>
            <Anchor to="/admin/users"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Users
            </li>
            </Anchor>
          </ul>
        </nav>
      </div>

      {/* Productos */}
      <div className="flex-1 p-8 overflow-scroll">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className='flex flex-row gap-3 items-center mb-4 justify-center content-center'> 
        <h2 className='text-2xl font-bold -mt-2 '>Add a new product</h2>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={handleModalClick} 
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
</div>
        <div>
        <div className="h-fit xl:h-[60%] lg:w-full gap-3 justify-center flex-wrap flex">
            {productosAdmin?.map((car) => (
              <div key={car._id}  className='flex flex-col hover:shadow-[0_4px_10px_rgba(0,0,0,0.10)] transition-transform transform hover:scale-105 hover:rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.15)] cursor-pointer w-[100%] sm:w-[40%] xl:w-[11vw] 2xl:w-[16.66%]'>
                <div className='h-[12vw]'>
                  <img onClick={() => navigate(`/products/${car._id}`)} className={imageStyle}  src={car.photo} alt="" />
                </div>
                <div className='h-fit relative border-t-[1px] border-[#393939] flex flex-col p-2 pb-[1rem] justify-start'>
                  <h2 className="text-md mt-[1rem] font-medium text-[#7847E0]">$ {car.price}</h2>
                  <h2 className="text-xs 2xl:text-md text-[#393939] text-start">{car.name}</h2>
                  <h2 className="text-xs 2xl:text-md text-[#393939] text-start">stock: {car.stock_Available}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* Modal */}
         {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

            <div className="bg-white p-4 rounded-md">
            <div className=' justify-end flex'> 
            <svg   onClick={handleModalClick}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
              <h2 className="text-lg font-semibold mb-2">Add a new product</h2>
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                Price:
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                Price offer:
                  <input
                    type="number"
                    name="price offer"
                    value={formData.price_offer}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                Percentage offer:
                  <input
                    type="number"
                    name="percentage offer"
                    value={formData.percentage_offer}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                photo:
                  <input
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                stock Available:
                  <input
                    type="number"
                    name="stock "
                    value={formData.stock_Available}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                category_id:
                  <input
                    type="text"
                    name="name"
                    value={formData.category_id}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                manufacturer_id:
                  <input
                    type="text"
                    name="name"
                    value={formData.manufacturer_id}
                    onChange={handleInputChange}
                  />
                </label>
                {/* Agrega los demás campos de entrada aquí */}
                <button type="submit" className="bg-purple-500 text-white font-bold">
                  Create Product
                </button>
              </form>
            </div>
          </div>
        )}
        <div className='flex justify-between'>
        <button className='bg-purple-500 border w-[10%] border-black text-white font-bold' onClick={HandleArrowPrev}>Prev</button>
      <button className='bg-purple-500 border w-[10%] border-black text-white font-bold' onClick={HandleArrowNext}>Next</button>
        </div>
    
      </div>
    </div>
  );
};

export default Products;