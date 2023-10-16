import React from 'react';
import Logo from "./Logo";
import Navigation from './Navigation';
import Hero from "./Hero"
import Burger from './Burger';

function Header() {

  return (
    <header>
      
        <div className="nav-wrapper">
        <Logo />
        <Navigation />
        <Burger />
        </div>
        <Hero isPromo={true}/>
    </header>
    )
}

export default Header;