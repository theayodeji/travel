import React from 'react'
import Button from "./Button"
import romanticTripsImg from "../assets/romantic-tropical.png"
import europeanToursImg from "../assets/romantic-tropical.png"


function Promo({promoText, promoClass, isRomanticPromo}) {
  return (
    <div className={`promo`}>
        <img src={ isRomanticPromo ? romanticTripsImg : europeanToursImg} alt={promoClass} />
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