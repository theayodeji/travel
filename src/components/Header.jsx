import React from 'react';
import Logo from "./Logo";
import Navigation from './Navigation';
import Button from "./Button"

function Header() {

    const handleClick = ()=> {
        return
    }

  return (
    <header>
        <Logo />
        <Navigation />
        <Button label={"Sign In"} dataType={"primary"} handleClick={handleClick}/>
    </header>
    )
}

export default Header;