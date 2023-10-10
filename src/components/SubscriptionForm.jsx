import React from 'react'
import Button from './Button'

function SubscriptionForm() {
  return (
    <div className='subscription-form'>
        <h6>Join Our Newsletter</h6>
        <div className="form">
            <input type="text"  placeholder='Your email address'/>
            <Button label={"Subscribe"} dataType={"primary"} handleClick={() => {return}}/>
        </div>
        <p>*  Will send you weekly updates for your better tour packages.</p>
    </div>
  )
}

export default SubscriptionForm