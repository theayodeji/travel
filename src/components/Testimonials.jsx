import React from 'react'
import TestimonialSlider from "./TestimonialSlider"
import slidernav from "../assets/testim-navigation.svg"

function Testimonials() {
  return (
    <div className='testimonial-section'>
        <p className="testimonial-tag">PROMOTION</p>
        <h2 className="testimonial-title">See what our clients say about us</h2>
        <div className="testimonial-container"><TestimonialSlider /></div>

        <img src={slidernav} alt="" className="slide-control left"/>
        <img src={slidernav} alt="" className="slide-control right"/>
    </div>
  )
}

export default Testimonials