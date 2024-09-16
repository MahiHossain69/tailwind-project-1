import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



const Menu = () => {
  let [show,setShow] = useState(false)
  return (
  <nav className='py-4 bg-[red]'>
    <div className="max-w-container mx-auto">
      <div className="flex">
      <div className="w-1/4">
      <img src={Logo} className='p-1.5'></img>
      </div>
      <div className="w-3/4 ">
      <ul className='lg:flex justify-end gap-x-10 sm:hidden'>
        <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] transition-ease-in-out duration-300 p-4 '>Home</li>
        <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] transition-ease-in-out duration-300 p-4'>About</li>
        <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] transition-ease-in-out duration-300 p-4'>Services</li>
        <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] transition-ease-in-out duration-300 p-4'>Gallery</li>
        <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] transition-ease-in-out duration-300 p-4'>Blog</li>
        <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] transition-ease-in-out duration-300 border-solid border-2 border-white-500 rounded-full p-4 hover:border-[#282828] shadow-lg shadow-indigo-500/40'>CONTACT</li>
     
      </ul>
      <div className="">
        <div onClick={()=>setShow(!show)} className="sm:text-3xl absolute right-8 top-32 cursor-pointer text-white lg:hidden ">
       
       {show == true ? <RxCross2 /> : <FaBars />}
       
     

        </div>
      </div>

      </div>
      </div>



    </div>
  </nav>
  )
}

export default Menu
