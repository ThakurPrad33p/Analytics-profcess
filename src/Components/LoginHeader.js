import React, { useState } from 'react';
import logo from './logo.jpg';
import { FaRegUser } from "react-icons/fa6";
import Forms from './LoginUtils/Forms';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const LoginHeader = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-slate-900">
      <div className="flex items-center gap-1">
        <img className="w-10" src={logo} alt="logo" />
        <h1 className="text-white font-bold text-2xl cursor-pointer">metafied</h1>
      </div>
      <div className="relative">
        <button
          className="flex items-center justify-between text-white px-4 py-2 rounded-full bg-gradient-to-b from-blue-500 to-transparent"
          onClick={toggleForm}
        >
          <FaRegUser />
          <MdOutlineKeyboardArrowDown />
        </button>
        {isFormOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50">
            <Forms />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginHeader;
