import React from 'react'
import data from "../database/db.json"
import TourInfo from './TourInfo';

function Tours() {
    const tours = data.Tours.map((tour, index) => {
        return <TourInfo key={index} {...tour}/>
    });
  return (
    <div>
        {tours}
    </div>
    
  )
}

export default Tours