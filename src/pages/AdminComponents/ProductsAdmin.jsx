import React from "react";
import { Link as Anchor } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import NavigationComponent from "./NavigationComponent";
import { useSelector, useDispatch } from "react-redux";
import categories_actions from "../../store/actions/categories";
import manufacturers_actions from "../../store/actions/manufacturers";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../../api";
const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { categories_read } = categories_actions;
  let { manufacturers_read } = manufacturers_actions;
  let categories = useSelector((store) => store.categories);
  let manufacturers = useSelector(
    (store) => store.manufacturerHome.manufacturers
  );
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios(`${apiUrl}products/sixcards?page=${page}`)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);
  console.log(productData);

  function HandleArrowNext() {
    if (productData.length === 0) {
      return;
    }

    const totalPages = productData.totalPages;

    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  }
  function HandleArrowPrev() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }
  const imageStyle = "h-[100%] w-[100%] object-cover  cursor-pointer";
  let productosAdmin = productData.products;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    price_offer: "",
    percentage_offer: "",
    photo: "",
    stock_Available: "",
    category_id: "",
    manufacturer_id: "",
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

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to create this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, create it!",
      confirmButtonColor: "#7847E0",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsModalOpen(!isModalOpen);
        axios
          .post(`${apiUrl}admin/products`, formData)
          .then((response) => {
            Swal.fire(
              "Product created!",
              "The product has been created successfully.",
              "success"
            );
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          "Cancelled",
          "The product creation has been cancelled.",
          "error"
        );
      }
    });
  };

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleModal2Click = (product) => {
    setSelectedProductId(product._id);
    setSelectedProduct(product);
    setIsModal2Open(!isModal2Open);
  };
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(categories_read());
    }
  }, []);

  useEffect(() => {
    if (manufacturers.length === 0) {
      dispatch(manufacturers_read());
    }
  }, []);

  console.log(categories.categories);
  console.log(manufacturers);

  let categories2 = categories.categories;

  const handleCategoryChange = (event) => {
    setFormData({
      ...formData,
      category_id: event.target.value,
    });
  };

  const handleManufacturerChange = (event) => {
    setFormData({
      ...formData,
      manufacturer_id: event.target.value,
    });
  };

  {
    /* logica de eliminar producto */
  }

  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7847E0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
          position: "top-center",
        });

        axios
          .delete(`${apiUrl}admin/deleteone/${productId}`)
          .then((response) => {
            console.log(response.data);

            setProductData((prevData) => {
              const updatedData = prevData.products.filter(
                (product) => product._id !== productId
              );
              return {
                ...prevData,
                products: updatedData,
              };
            });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        Swal.fire("be careful next time");
      }
    });
  };
  {
    /* logica editar productp */
  }

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    description: "",
    price: 0,
    price_offer: 0,
    percentage_offer: 0,
    photo: "",
    stock_Available: 0,
    category_id: "",
    manufacturer_id: "",
  });
  const handleSubmitEdit = (productId) => (event) => {
    event.preventDefault();
  
    // Mostrar alerta de confirmación antes de la edición
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to edit this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: "#d33",
      confirmButtonColor: "#7847E0",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsModal2Open(!isModal2Open)
        axios
          .put(`${apiUrl}admin/update/${productId}`, formDataEdit)
          .then((response) => {
           
            setProductData((prevData) => {
              const updatedProducts = prevData.products.map((product) => {
                if (product._id === productId) {
                
                  return {
                    ...product,
                    name: formDataEdit.name,
                    description: formDataEdit.description,
                    price: formDataEdit.price,
                    price_offer: formDataEdit.price_offer,
                    percentage_offer: formDataEdit.percentage_offer,
                    photo: formDataEdit.photo,
                    stock_Available: formDataEdit.stock_Available,
                    category_id: formDataEdit.category_id,
                    manufacturer_id: formDataEdit.manufacturer_id,
                  };
                }
                return product;
              });
              return {
                ...prevData,
                products: updatedProducts,
              };
            });
  
            Swal.fire('Success!', 'Your product has been edited.', 'success');
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        Swal.fire('Be careful next time');
      }
    });
  };
  const handleInputChangeName = (event) => {
    const { name, value } = event.target;
    setFormDataEdit((prevFormData) => ({
      ...prevFormData,
      name: value,
    }));
  };
const handleInputChangeDescription = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    description: value
  }))
}
const handleInputChangePrice = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    price: value
  }))
}
const handleInputChangePriceOffer = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    price_offer:value
  }))
}
const handleInputChangePercentageOffer = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    percentage_offer:value
  }))
}
const handleInputChangePhoto = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    photo:value
  }))
}
const handleInputChangeStock = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    stock_Available:value
  }))
}

const handleInputChangeCategorieEdit = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    category_id:value
  }))
}
const handleInputChangeBrandEdit = (event) =>{
  const {name, value} = event.target;
  setFormDataEdit((prevFormData)=>({
    ...prevFormData,
    manufacturer_id:value
  }))
}


  useEffect(() => {
    if (selectedProduct) {
      setFormDataEdit({
        name: selectedProduct.name,
        description: selectedProduct.description,
        price: selectedProduct.price,
        price_offer: selectedProduct.price_offer,
        percentage_offer: selectedProduct.percentage_offer,
        photo: selectedProduct.photo,
        stock_Available: selectedProduct.stock_Available,
        category_id: selectedProduct.category_id,
        manufacturer_id: selectedProduct.manufacturer_id,
      });
    }
  }, [selectedProduct]);

 

  return (
    <div className="h-screen flex bg-gray-100">
      <NavigationComponent />

      {/* Productos */}

      <div className="flex-1 p-8 overflow-scroll">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Products</h2>
        <div className="flex flex-row gap-3 items-center mb-4 justify-center content-center">
          <h2 className="text-xl md:text-2x font-bold -mt-2 ">Add a new product</h2>
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
              <div
                key={car._id}
                className="flex flex-col hover:shadow-[0_4px_10px_rgba(0,0,0,0.10)] transition-transform transform hover:scale-105 hover:rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.15)] cursor-pointer w-[100%] sm:w-[40%] xl:w-[11vw] 2xl:w-[16.66%]"
              >
                <div className="h-[30vw] sm:h-[20vw] md:h-[12vw] relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 absolute top-2 left-2 z-10 cursor-pointer transition-transform transform hover:scale-150`}
                    onClick={() => handleModal2Click(car)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 absolute top-2 right-2 z-10 cursor-pointer transition-transform transform hover:scale-150`}
                    onClick={() => handleDelete(car._id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <img
                    onClick={() => navigate(`/products/${car._id}`)}
                    className={imageStyle}
                    src={car.photo}
                    alt=""
                  />
                </div>
                <div className="h-fit relative border-t-[1px] border-[#393939] flex flex-col p-2 pb-[1rem] justify-start">
                  <h2 className="text-md mt-[1rem] font-medium text-[#7847E0]">
                  {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(car.price)} 
                  </h2>
                  <h2 className="text-xs 2xl:text-md text-[#393939] text-start">
                    {car.name}
                  </h2>
                  <h2 className="text-xs 2xl:text-md text-[#393939] text-start">
                    stock: {car.stock_Available}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <div className="justify-end flex">
                <svg
                  onClick={handleModalClick}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold mb-2">Add a new product</h2>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="mb-2">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[110px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[70px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Price:
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[115px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Price offer:
                  <input
                    type="number"
                    name="price_offer"
                    value={formData.price_offer}
                    onChange={handleInputChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-20 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Percentage offer:
                  <input
                    type="number"
                    name="percentage_offer"
                    value={formData.percentage_offer}
                    onChange={handleInputChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[35px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  photo:
                  <input
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-28 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  stock Available:
                  <input
                    type="number"
                    name="stock_Available"
                    value={formData.stock_Available}
                    onChange={handleInputChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-12  p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Categorie:
                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleCategoryChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[85px]  p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a category</option>
                    {categories2?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mb-2">
                  Brand:
                  <select
                    name="manufacturer_id"
                    value={formData.manufacturer_id}
                    onChange={handleManufacturerChange}
                    className="border  w-[50%] border-gray-300 rounded-md ml-28 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select the brand of the product</option>
                    {manufacturers?.map((manufacturer) => (
                      <option key={manufacturer._id} value={manufacturer._id}>
                        {manufacturer.name}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="submit"
                  className="bg-purple-500 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Create Product
                </button>
              </form>
            </div>
          </div>
        )}
        {/* modal2 */}
        {isModal2Open && selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <div className=" justify-end flex">
                <svg
                  onClick={handleModal2Click}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold mb-2">Edit the product</h2>
              <form
                className="flex flex-col"
                onSubmit={handleSubmitEdit(selectedProductId)} 
              >
                    <label className="mb-2">
                  Name:
                  <input
                    type="text"
                    name="nameEdit"
                    value={formDataEdit.name}
                    onChange={handleInputChangeName}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[110px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Description:
                  <input
                    type="text"
                    name="descriptionEdit"
                    value={formDataEdit.description || ""}
                    onChange={handleInputChangeDescription}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[70px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Price:
                  <input
                    type="number"
                    name="priceEdit"
                    value={formDataEdit.price || ""}
                    onChange={handleInputChangePrice}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[115px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Price offer:
                  <input
                    type="number"
                    name="price_offerEdit"
                    value={formDataEdit.price_offer || ""}
                    onChange={handleInputChangePriceOffer}
                    className="border  w-[50%] border-gray-300 rounded-md ml-20 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Percentage offer:
                  <input
                    type="number"
                    name="percentage_offerEdit"
                    value={formDataEdit.percentage_offer || ""}
                    onChange={handleInputChangePercentageOffer}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[35px] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Photo:
                  <input
                    type="text"
                    name="photoEdit"
                    value={formDataEdit.photo || ""} 
                    onChange={handleInputChangePhoto}
                    className="border  w-[50%] border-gray-300 rounded-md ml-28 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Stock Available:
                  <input
                    type="number"
                    name="stock_AvailableEdit"
                    value={formDataEdit.stock_Available || ""} 
                    onChange={handleInputChangeStock}
                    className="border  w-[50%] border-gray-300 rounded-md ml-12  p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
                <label className="mb-2">
                  Categorie:
                  <select
                    name="category_idEdit"
                    value={formDataEdit.category_id || ""}
                    onChange={handleInputChangeCategorieEdit}
                    className="border  w-[50%] border-gray-300 rounded-md ml-[85px]  p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a category</option>
                    {categories2?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mb-2">
                  Brand:
                  <select
                    name="manufacturer_id"
                    value={formDataEdit.manufacturer_id || ""}
                    onChange={handleInputChangeBrandEdit}
                    className="border  w-[50%] border-gray-300 rounded-md ml-28 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select the brand of the product</option>
                    {manufacturers?.map((manufacturer) => (
                      <option key={manufacturer._id} value={manufacturer._id}>
                        {manufacturer.name}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  type="submit"
                  className="bg-purple-500 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Edit the product
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <button
            className="bg-purple-500 border rounded-lg w-[45%] sm:w-[20%] lg:w-[15%] 2xl:w-[5%] border-black text-white font-bold"
            onClick={HandleArrowPrev}
          >
            Prev
          </button>
          <button
            className="bg-purple-500 border w-[45%] sm:w-[20%] lg:w-[15%]  2xl:w-[5%] rounded-lg border-black text-white font-bold"
            onClick={HandleArrowNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
