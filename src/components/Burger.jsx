import React from 'react'

function Burger() {

    const openNav = () => {
        document.querySelector('nav').classList.toggle('active');
        document.querySelector('.burger').classList.toggle('active');
    }

  return (
    <div className='burger' onClick={openNav}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Burger