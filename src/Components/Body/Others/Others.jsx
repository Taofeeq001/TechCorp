import React from 'react'
import './Others.css'
import image from '../../Images/bg2.avif'

const Others = () => {
  return (
    <div className='others-container'>
        <h1>ABOUT US</h1>
        <div className='others'>
            <img src={image} alt="" />
            <div className='info'>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laborum ut laboriosam consectetur odit recusandae velit cumque pariatur, aperiam nisi cum tenetur iure voluptatibus nostrum dignissimos eaque, ea id eos minus quaerat sint temporibus provident ab ullam! Nostrum, id officia?</p>
            </div>
        </div>
    </div>
  )
}
export default Others;
