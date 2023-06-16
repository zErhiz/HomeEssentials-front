import React, { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import action from "../../store/actions/orders";
import axios from "axios";
import apiUrl from "../../../api";
const Orders = () => {
  let orders = useSelector((store) => store.ordersget.orders);
  let { orders_read } = action;
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(orders_read());
    }
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [newStatus, setNewStatus] = useState("");
 
  const openModal = (orderId) => {
    setOrderId(orderId);
    setNewStatus(""); 
    setModalOpen(true);
  };
  const handleModalClick = () => {
    setModalOpen(!modalOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to modify the status?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, modify it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(`${apiUrl}order/update`, {
            orderId,
            newStatus,
          });
  
          if (response.status === 200) {
          
            Swal.fire(
              "Status Modified",
              "The status has been modified successfully.",
              "success"
            );
            setModalOpen(false); 
            dispatch(orders_read()); 
          } else {
            Swal.fire(
              "error",
              "error in the server.",
              "error"
            );
          }
        } catch (error) {
          console.error(error);
        
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          "Cancelled",
          "The status modification has been cancelled.",
          "error"
        );
      }
    });
  };



  return (
    <>
   <div className="h-screen flex bg-gray-100">
  <NavigationComponent />
  <div className="flex-1 p-8 overflow-scroll">
    <h2 className="text-2xl font-bold mb-4">Orders</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h3 className="hidden sm:block col-span-1 font-medium lg:text-xl">User Orders</h3>

      {orders.map((order) => (
        <div className="w-[70vw] sm:w-[35vw] md:w-[30vw] lg:w-[20vw] xl:w-[25vw] border border-gray-200 rounded p-4 shadow-md" key={order._id}>
          <h3 className="text-lg font-semibold mb-2">{order?.user?.name} {order?.user?.lastName}</h3>
          <p className="text-sm mb-2">Email: {order?.user?.email}</p>
          <p className="text-sm mb-2">Status: {order?.order?.status}</p>
          <p className="text-sm mb-2">Address: {order?.user?.address}</p>
          <p className="text-sm mb-2">Country: {order?.user?.country}</p>
          <p className="text-sm mb-2">Dni: {order?.user?.dni}</p>
          <p className="text-sm mb-2">Phone: {order?.user?.phoneNumber}</p>
          <h4 className="text-base font-semibold">Date</h4>
          <p className="text-sm mb-2">Order date: {order.createdAt.slice(0, -14)}</p>
          {order?.product.map((product) => (
            <div key={product._id} className="mt-4">
              <h4 className="text-base font-semibold">{product?.name}</h4>
              <p className="text-sm">Price: ${product?.price}</p>
              <p className="text-sm">Quantity: {product?.quantity}</p>
            </div>
          ))}
          <button className="bg-purple-600 text-white font-bold py-1 rounded-xl w-full sm:w-[50%]" onClick={() => openModal(order._id)}>Change Status</button>
        </div>
      ))}
    </div>
  </div>
</div>
    {modalOpen && (
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
              <h2 className="text-lg font-semibold mb-2">Edit the status of the order</h2>
              <form className="flex flex-col" onSubmit={handleSubmit}
              >
                <label className="mb-2">
                  Status:
                  <input
                    type="text"
                    name="name"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </label>
               

                <button
                  type="submit"
                  className="bg-purple-500 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Edit status
                </button>
              </form>
            </div>
          </div>
        )}
    </>
  );
};

export default Orders;