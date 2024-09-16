import React from 'react'
import Pic1 from "../../assets/pic1.png"
import Pic2 from "../../assets/pic2.png"
import Pic3 from "../../assets/pic3.png"
import Pic4 from "../../assets/pic4.png"

function Picture() {
  return (
    <section className='mt-[100px]'>
        <div className="flex gap-[21px]">
            <img className='w-[300px]' src={Pic1}></img>
            <img className='w-[300px]' src={Pic2}></img>
            <img className='w-[300px]' src={Pic3}></img>
            <img className='w-[300px]' src={Pic4}></img>
        </div>
    </section>
  )
}

export default Picture
