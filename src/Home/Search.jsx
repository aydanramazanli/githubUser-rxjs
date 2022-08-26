import React from 'react'

export default function Search({ handler }) {
  return (
    <div className="content flex items-center">
      <div className="my-10 w-full ">
        <div>
          <p className="text-center text-red-600 text-lg py-2 font-semibold"></p>
        </div>
        <div className="flex bg-white  px-3 py-1.5  justify-between rounded w-full" style={{border:'2px solid gray'}}>
          <input
            onChange={handler}
            type="text"
            placeholder="enter username"
            className="border-none outline-none w-full"
          />
        </div>
      </div>
     
    </div>
  )
}
