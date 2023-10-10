import React from 'react'
import star from "../assets/star.png"

function Rating({rating}) {
    const starsEl =[]
  for (var i=1; i <= rating ;i++){
        starsEl.push(<span className='rating-star'><img src={star} alt="" /></span>)
  }
  return starsEl
}

export default Rating