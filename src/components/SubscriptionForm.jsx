import Button from './Button'
import validateForm from '../utilities/emailValidation'

function SubscriptionForm({showSuccessPopup}) {

  return (
    <div className='subscription-form'>
        <h6>Join Our Newsletter</h6>
        <div className="form">
            <input type="text"  placeholder='Your email address' id='email'/>
            <Button label={"Subscribe"} dataType={"primary"} handleClick={ () =>{ 
              validateForm() && showSuccessPopup()
              }}/>
        </div>
        <p id="emailError"></p>
        <p>*  Will send you weekly updates for your better tour packages.</p>
    </div>
  )
}

export default SubscriptionForm