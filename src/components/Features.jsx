import React from 'react'
import chooseDest from "../assets/choose-destination-icon.png"
import checkAvail from "../assets/check-availability-illustration.png"
import go from "../assets/go-illustration.png"
import featuresImg from "../assets/book-a-trip.png"

function Features() {
  return (
    <div className="features">
        <div className="features-container">
            <h6 className="tag">Fast & Easy</h6>
            <h2 className="features-title">Get Your Favourite Resort Bookings</h2>
            <div className="features-cards">
                <div className="feature">
                    <img src={chooseDest} alt="" />
                    <div className="feature-text">
                        <p>Choose Destination</p>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
                <div className="feature">
                    <img src={checkAvail} alt="" />
                    <div className="feature-text">
                        <p>Check Availability</p>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
                <div className="feature">
                    <img src={go} alt="" />
                    <div className="feature-text">
                        <p>Let's Go</p>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
            </div>
        </div>
        <img src={featuresImg} alt="" />
    </div>
  )
}

export default Features