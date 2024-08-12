import React from 'react'
import { FaLock } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Inputs = () => {
  return (
    <>
       <div className="rounded-md shadow-sm -space-y-px">
          <div className='relative w-full h-[50px] my-[15px]'>
            <input id="email-address" name="email" type="email" autoComplete="email" required
              className="w-full px-10 h-full text-base bg-transparent relative rounded-md block py-2 border-2 border-solid border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder=" Email" />
              <IoMdMail className="text-gray-500 absolute left-5 top-1/2 translate-x-0 -translate-y-2 text-base" />
          </div>
          <div className='relative w-full h-[50px] my-[15px]'>
            <input id="password" name="password" type="password" autoComplete="current-password" required
              className="w-full px-10 h-full text-base bg-transparent relative block rounded-md py-2 border-2 border-solid border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password" />
              <FaLock className="text-gray-500 absolute left-5 top-1/2 translate-x-0 -translate-y-2 text-base" />
          </div>
        </div>
    </>
  )
}

export default Inputs
