import React from 'react'

export default function Navbar() {
  return (
    <div className="content bg-white px-2 py-4 mt-6">
      <div className="flex justify-evenly items-center ">
        <img alt="aydan" className="w-12 h-12 rounded-3xl" />
        <h4>
          Welcome, <strong>Aydan</strong>
        </h4>

        {/* <button className="p-3 text-slate-500 font-medium">Logout</button> */}
        <button className=" p-3 text-slate-500 font-medium">Login</button>
      </div>
    </div>
  )
}
