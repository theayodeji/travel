import React from 'react'
import tours from "../assets/guided-tours.svg"
import flights from "../assets/best-flight.svg"
import religous from "../assets/religous-tours.svg"
import medical from "../assets/medical-ins.svg"
import Service from './Service'

function Services() {

    const services = [
        {serviceName: "Guided Tours", 
        serviceText:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.", 
        illustration:tours},
        {serviceName: "Best Flight Options", serviceText:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.", 
        illustration:flights},
        {serviceName: "Religous Tours", serviceText:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.", 
        illustration:religous},
        {serviceName: "Medical Insurance", serviceText:"sunt qui repellat saepe quo velit aperiam id aliquam placeat.", 
        illustration:medical}
    ]

  return (
    <div className='services'>
        <p>CATEGORY</p>
        <h2>We Offer The Best Services</h2>
        <div className="services-container">
            {services.map((service, index)=>{
                return (
                    <Service key={index} {...service}/>
                )
            })}
        </div>
    </div>
  )
}

export default Services