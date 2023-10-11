import React from 'react';
import Logo from "./Logo";
import Navigation from './Navigation';
import Button from "./Button"
import Hero from "./Hero"

function Header() {

    const handleClick = ()=> {
        return
    }

  return (
    <header>
        <Logo />
        <Navigation />
        <Button label={"Sign In"} dataType={"primary"} handleClick={handleClick}/>
        <Hero isPromo={true}/>
    </header>
    )
}

export default Header;