import React from 'react'
import Logo from './Logo'
import SocialIcons from "./SocialIcons"
import SubscriptionForm from './SubscriptionForm'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
                <div className="footer-section outro">
                <Logo />
                <p>Travel helps companies manage payments easily.</p>
                <SocialIcons />
            </div>
            <div className="footer-section footer-nav">
                <h6>Company</h6>
                <ul>
                    <li className="navlist-item footer-navlist-item">About Us</li>
                    <li className="navlist-item footer-navlist-item">Careers</li>
                    <li className="navlist-item footer-navlist-item">Blog</li>
                    <li className="navlist-item footer-navlist-item">Pricing</li>
                </ul>
            </div>
            <div className="footer-section footer-destinations">
                <h6>Destinations</h6>
                    <ul>
                        <li className="navlist-item footer-navlist-item">Maldives</li>
                        <li className="navlist-item footer-navlist-item">Los Angeles</li>
                        <li className="navlist-item footer-navlist-item">Las Vegas</li>
                        <li className="navlist-item footer-navlist-item">Toronto</li>
                    </ul>
            </div>
            <div className="footer-section subscription-form">
                <SubscriptionForm />    
            </div>
        </div>
        <div className="footer-copyright">Copyright @ Xpro 2022. All Rights Reserved.</div>
    </div>
  )
}

export default Footer;