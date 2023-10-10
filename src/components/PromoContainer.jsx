import React from 'react'
import Promo from './Promo'

function PromoContainer({ promoDetails }) {
  return (
    <div className='promo-container'>
        <Promo {...promoDetails}/>
    </div>
  )
}

export default PromoContainer