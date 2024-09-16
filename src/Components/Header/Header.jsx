import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";





function Header() {
  return (
   <section className='py-2 bg-hbg'>
    <div className='max-w-container mx-auto'>
     <div className="flex bg-#282828-900 items-center flex-wrap">
        <div className="w-full lg:w-1/4">
        <div className="flex items-center gap-x-2 justify-center lg:justify-start">
        <IoMailOpenOutline className='text-white' />
            <p className='lg:text-white text-[gold]'>mail@yourcompany.com</p>
        </div>
        </div>
        <div className="w-full lg:w-1/4 py-2 lg:py-0">
        <div className="flex items-center gap-x-2 justify-center lg:justify-start">
        <MdOutlineWifiCalling3 className='text-white' />

            <p className='lg:text-white text-[gold]'>+896 120 5889 (Toll free)</p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 py-2 lg:py-0">
       <div className="flex lg:justify-end justify-center gap-x-5">
       <FiFacebook className='text-white' />
        <GrTwitter  className='text-white'/>
        <FaLinkedinIn  className='text-white' />
        <FaInstagram  className='text-white'/>
       </div>




        </div>
     </div>
    </div>

   </section>
  )
}

export default Header
