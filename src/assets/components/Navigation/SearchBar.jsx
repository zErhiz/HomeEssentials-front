import React, { useState } from "react";
import apiUrl from "../../../../api";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${apiUrl}products/search?searchQuery=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  return (
    <div className="flex justify-center">
     <input
    type="text"
    placeholder="Search..."
    className="rounded-l-full border-gray-300 bg-[#EDECEC] focus:outline-none focus:ring-2 focus:ring-black focus:border-black px-4 py-2 flex-1"
    value={searchQuery}
    onChange={handleSearchQueryChange}
      />
     <button onClick={handleSearch} className="bg-purple-500 hover:bg-purple-600 text-white rounded-r-full px-4 py-2">
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

      <ul>
        {searchResults.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;