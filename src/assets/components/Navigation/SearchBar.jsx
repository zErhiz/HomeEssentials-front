import React, { useState } from "react";
import apiUrl from "../../../../api";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (!query) {
      setSearchResults([]);
    } else {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}products/search?searchQuery=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  const showOverflowScroll = searchResults.length > 0;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-l-full border-gray-300 bg-[#EDECEC] focus:outline-none focus:ring-2 focus:ring-transparent px-4 py-2 flex-1"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <button className="bg-[#7847E0] hover:bg-[#8450f4] text-white rounded-r-full px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute transition-all top-[7rem] left-16 flex flex-col z-50 overflow-x-hidden ${showOverflowScroll ? "overflow-auto" : ""
            } h-[70%]`}
        >
          {searchResults.map((product) => (
            <div onClick={() => navigate(`/products/${product._id}`)} key={product._id} className="cursor-pointer bg-white rounded-md shadow-md px-4 py-2 flex border justify-start">
              <img
                src={product.photo}
                alt={product.name}
                className="w-40 h-40 object-cover"
              />
              <div className="justify-end flex flex-col w-full items-end content-center">
                <h3 className="text-xl font-semibold w-[70%] text-end">{product.name}</h3>
                <p className="text-gray-600 "> {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(product.price)} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
