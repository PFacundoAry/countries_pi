import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar-cont'>
        <div className='navbar-cont-links'>
            <Link className='navbar-link' to="/home">Home</Link>
            <Link className='navbar-link' to="/create">Formulario</Link>
        </div>
        <div className='navbar-cont-search'>
            <input type="text" name="" id="" />
            <input type="submit" />
        </div>
    </div>
  )
}

export default NavBar
