import React from 'react'
import Button from "./Button"

function Promo({promoText, promoClass, illustration}) {
  return (
    <div className={`promo {}`}>
        <img src={illustration} alt={promoClass} />
        <div className="promo-text">
            <p className='promo-tag'>{promoText.tag}</p>
            <h2>{promoText.title}</h2>
            <p className='promo-description'>{promoText.description}</p>
            <Button label={"View Packages"}/>
        </div>
    </div>
  )
}

export default Promo