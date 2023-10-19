import React from 'react'
import checkmark from "../assets/Frame.svg"
import "../css/successPopup.css"

function SubscriptonSuccessPopup({hideSuccessPopup}) {
  return (
    <div className='subscription-success'>
        <div className="success-container">
            <img src={checkmark} alt=""/>
            <div className="success-text">
                <h3>ALoha!</h3>
                <p>An email has been sent to your mail. Please check your inbox to confirm.</p>
                <div id="close-button" onClick={hideSuccessPopup}></div>
            </div>
        </div>  
    </div>
  )
}

export default SubscriptonSuccessPopup