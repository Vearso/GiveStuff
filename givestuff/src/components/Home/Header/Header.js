import React from 'react';
import banner from '../../../assets/Home-Hero-Image.jpg';
import Navigation from "../Navigation/Navigation";
import './Header.scss';
import Info from "../Info/Info";

const Header = () => {
    return(
      <header className='home__header' id='header'>
        <img className="header__banner" src={banner} alt='Home-Hero'/>
        <article>
            <Navigation/>
            <Info/>
        </article>
      </header>
    )
}

export default Header