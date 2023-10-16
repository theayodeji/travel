import React, { useEffect } from "react";
import data from "../database/db.json"
import Slide from "../utilities/tesimonialSlider";

const testimonials = data.testimonials;

const slides = testimonials.map((slide, index) => {
  return (
    <div className="testimonial-slider-slide" key={index}>
      <img src={slide.img} alt="" />
      <p className="testimonial-slider-text">{slide.text}</p>
      <p className="testimonial-slider-name">
        {slide.customerName + " "} - <span>{" " + slide.customerProfession}</span>
      </p>
    </div>
  );
});

function TestimonialSlider() {

  

  useEffect(() => {
    
    Slide()

  }, [])

  return <div className="testimonial-slider slide1">
          {slides}
         </div>;
}

export default TestimonialSlider;
