import React from 'react'
import Promo from './Promo'

function PromoContainer({ promoDetails, isRomaticPromo }) {
  return (
    <div className='promo-container'>
        <Promo {...promoDetails} isRomanticPromo={isRomaticPromo}/>
    </div>
  )
}

export default PromoContainer