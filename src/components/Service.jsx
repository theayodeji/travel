import React from 'react'

function Service({ serviceName, serviceText, illustration }) {
  return (
    <div className='service'>
        <img src={illustration} alt={serviceName} />
        <h5 className='service-name'>{serviceName}</h5>
        <p className='service-description'>{serviceText}</p>
    </div>
  )
}

export default Service