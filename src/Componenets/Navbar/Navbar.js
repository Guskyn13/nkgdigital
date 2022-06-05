import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo.svg';

const Navbar = () => {
    return (
        <div className='navbar_container'>
            <div className='navbar_logo'>
                <img className='navbar_logo' src={Logo} alt="logo" />
            </div>
            <div className='navbar_links'>
                <ul className='navbar_ul'>
                    {['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT'].map((item) => (
                        <li className='navbar_li' key={item}>{item}
                            <a href={`#${item}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;