import React from 'react'
import Service1 from "../../assets/service1.png"
import Service2 from "../../assets/service2.png"
import Service3 from "../../assets/service3.png"
import Blur from "../../assets/blur.png"

function Services() {
  return (
   <section className='mt-[100px]'>
  <div className="flex">
  
   <div className="w-1/2 mx-24">
   <h1 className='font-pops font-semibold text-6xl'>Our Services</h1>
   <p className='text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
   </div>
   
   <div className="w-1/2 mt-[-80px]">
   <img  src={Service1}>
  
   </img>
   
   <img className='mt-[-230px]' src={Blur}></img>
   
   </div>

  </div>


   </section>
  )
}

export default Services
