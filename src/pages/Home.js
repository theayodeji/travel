import React from 'react';
import Header from "../components/Header";
import Partners from "../components/Partners"
import Services from "../components/Services"
import data from "../database/db.json"
import PromoContainer from '../components/PromoContainer';
import Features from "../components/Features"
import Banner from "../components/Banner"
import amazingHolidaybg from "../assets/stauelibertybanner-img.png"
import exploreNatureImg from "../assets/explore-nature.png"
import explorecitiesImg from "../assets/explore-cities.png"
import ToursPreview from '../components/ToursPreview';
import TestimonialSlider from "../components/TestimonialSlider"
import Footer from "../components/Footer"


function Home() {

  const honeymoonPromo = data.promos.honeymoon;
  const europeanToursPromo = data.promos.europeanTours;

  return (
    <div className='home'>
        <Header />
        <Partners />
        <Services />
        <PromoContainer promoDetails={honeymoonPromo}/>
        <Features />
        <Banner isInfoBanner={true} bannerText={{title:"Let's make your next holiday amazing"}} imgBackground={amazingHolidaybg}/>
        <PromoContainer promoDetails={europeanToursPromo}/>
        <div className='explore-banners'>
          <Banner bannerText={{title:"Explore Nature"}} isInfoBanner={false} imgBackground={exploreNatureImg}/>
          <Banner bannerText={{title:"Explore Nature"}} isInfoBanner={false} imgBackground={explorecitiesImg}/>
        </div>
        <ToursPreview />
        <TestimonialSlider />
        <Footer />
    </div>
  )
}

export default Home;