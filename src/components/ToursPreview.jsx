import React from 'react'
import data from "../database/db.json"
import TourInfo from './TourInfo';
import { useEffect } from 'react';

function ToursPreview() {
    const tours = data.Tours.map((tour, index) => {
        return <TourInfo key={index} {...tour}/>
    });


     useEffect(() =>{
      const sliders = document.querySelector(".tours-sliders").childNodes;
      const toursCarousel = document.querySelector('.tours');

      sliders.forEach(slider =>{
        slider.addEventListener("click", ()=> {
          sliders.forEach(slider =>{slider.classList.remove('active-slide')});

          slider.classList.add('active-slide');
          if(slider.id === '1'){
            toursCarousel.style.transform = 'translateX(0)';
          }else if (slider.id === '2'){
            toursCarousel.style.transform = 'translateX(-250px)';
          }else if (slider.id === '3'){
            toursCarousel.style.transform = 'translateX(-500px)';
          }
        })
      })
     },[])


  return (
    <div className="toursPreview"> 
        <div className="toursPreview-header">
          <p className="toursPreview-tag">TRENDY</p>
          <h2 id='toursPreview-title'>Our Trending Tour Packages</h2>
        </div>
        <div className="tours-container"><div className="tours">{tours}</div></div>
        <div className="tours-sliders" >
          <div id="1" className='active-slide'></div>
          <div id="2"></div>
          <div id="3"></div>  
        </div> 
    </div>
    
  )
}

export default ToursPreview