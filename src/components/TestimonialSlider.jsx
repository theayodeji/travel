import React from "react";
import data from "../database/db.json"

function TestimonialSlider() {
  const testimonials = data.testimonials;

  const slides = testimonials.map((slide) => {
    return (
      <div className="testimonial-slider-slide">
        <img src={slide.img} alt="" />
        <p className="testimonial-slider-text">{slide.text}</p>
        <p className="testimonial-slider-name">
          {slide.customerName + " "} - <span>{" " + slide.customerProfession}</span>
        </p>
      </div>
    );
  });

  return <div className="testimonial-slider">{slides}</div>;
}

export default TestimonialSlider;
