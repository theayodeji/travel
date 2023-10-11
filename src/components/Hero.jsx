import React from 'react'
import swirl from "../assets/swirl.png"
import SearchBooking from './SearchBooking'
// import HeroPromo from './HeroPromo'

function Hero({isPromo}) {

    if(isPromo){
        return (
            <div className="hero hero-promo">
                <img src={swirl} alt="" />
                <h1>No matter where you're going to, we'll take you there</h1>
                <SearchBooking />
                {/* <HeroPromo /> */}
            </div>
        )
    }else{
        return (
            <div className='hero'>
                <p></p>
                
            </div>
        )
    }
}

export default Hero