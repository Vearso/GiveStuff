import React from 'react';
import banner from '../../../assets/Form-Hero-Image.jpg';
import Navigation from "../../Home/Navigation/Navigation";
import Info from "../Info/Info";

const Header = () => {
    return(
        <header className='home__header' id='header'>
            <img className="header__banner" src={banner} alt='Form-Hero'/>
            <article>
                <Navigation/>
                <Info/>
            </article>
        </header>
    )
}

export default Header