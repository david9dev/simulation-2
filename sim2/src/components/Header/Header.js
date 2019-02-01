import React from 'react'
import './Header.css';
import icon from './houser_logo.png';

function Header()
{
    return(
        <div className='header'>
            <img className='icon' src={icon} alt='houser'/>
            <h2>HOUSER</h2>
        </div>
    )
}

export default Header;