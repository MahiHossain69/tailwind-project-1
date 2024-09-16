import React from 'react'
import Banneer from "../../assets/banner.png"

function Banner() {
  return (
 <section> 
       <img src={Banneer}></img>
       <div className="max-w-container mx-auto">
        <div className="absolute top-[300px] text-white text-6xl w-[61%] font-pops font-bold ">
            <h1>We exist since 1975 on the oil and gas industry.</h1>
        </div>
        <div className="w-[150px] bg-red-600 rounded-full h-10 text-center text-white absolute top-[450px] hover:bg-red-950 ease-in-out duration-300  font-pops">
            <button className='text-center mt-[8px]'>
            LEARN MORE


            </button>
        </div>
       </div>

 </section>
  )
}

export default Banner
