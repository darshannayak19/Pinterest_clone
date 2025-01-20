import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser, CiSearch } from "react-icons/ci";
import { PinData } from "../context/PinContext";

const Navbar = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const {searchPins} = PinData();

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    searchPins(value);  // Call searchPins whenever the input changes
};
  return (
    <div>
      <div className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center mr-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
              alt=""
              className="h-6 md:mr-2"
            />
            <span className="text-red-600 text-xl font-bold">Pinterest</span>
          </Link>
          <div className="flex items-center flex-grow mx-4 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-2xl pl-2 pr-10 py-1 w-full"
            />
            <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex items-center space-x-4 w-[200px]">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/create" className="text-gray-700 hover:text-gray-900">
              Create
            </Link>
            {user && user.name ? (
              <Link
                to="/account"
                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xl text-gray-700"
              >
                {user.name.slice(0, 1)}
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xl text-gray-700"
              >
                <CiUser />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
