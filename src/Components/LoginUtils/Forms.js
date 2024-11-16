import React from 'react'

const Forms = () => {

  return (
    <div className="flex justify-center items-center   p-5">
      <form className=" p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Name:
            <input 
              type="text" 
              name="name" 
              className="w-full mt-1 px-3 py-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email:
            <input 
              type="email" 
              name="email" 
              className="w-full mt-1 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password:
            <input 
              type="password" 
              name="password" 
              className="w-full mt-1 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
            />
          </label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Forms