import React from 'react'
import star from "../assets/star.png"

function Rating({rating}) {
    const starsEl =[]
  for (var i=1; i <= rating ;i++){
        starsEl.push(<span className='rating-star' key={i}><img src={star} alt="" /></span>)
  }
  return <span className="rating">{starsEl}</span>
}

export default Rating