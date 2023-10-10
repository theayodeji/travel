import React from 'react'
import Button from "./Button"

function Banner({isInfoBanner, imgBackground, bannerText}) {
    if (isInfoBanner){
        return (
            <div className='banner'>
                <img src={imgBackground} alt="" />
                <h2 className="banner-text">
                    {bannerText.title}
                </h2>
            </div>
        )
    }else{
        return(
            <div className='banner'>
                <img src={imgBackground} alt="" />
                <div className="banner-text">
                    <p className="tag"></p>
                    <h2>{bannerText.title}</h2>
                    <Button label={"View Packages"}/>
                </div>
            </div>
        )
    }
}

export default Banner