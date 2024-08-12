import React from 'react'
import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'

const ButtonLogos = () => {
  return (
    <>
      <div className="flex justify-center gap-2">
        <a href="" className="flex items-center justify-center w-16 h-16 border-2 rounded-full"><FaGoogle className="text-gray-500 w-8 h-8" /></a>
        <a href="" className="flex items-center justify-center w-16 h-16 border-2 rounded-full"><FaFacebookSquare className="text-gray-500 w-8 h-8" /></a>
        <a href="" className="flex items-center justify-center w-16 h-16 border-2 rounded-full"><FaTwitter className="text-gray-500 w-8 h-8" /></a>
        <a href="" className="flex items-center justify-center w-16 h-16 border-2 rounded-full"><FaGithub className="text-gray-500 w-8 h-8" /></a>
      </div>
    </>
  )
}

export default ButtonLogos
