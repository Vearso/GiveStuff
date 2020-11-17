import React from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from '../../../routes';
import {Link as Scroll} from 'react-scroll';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className='header__nav'>
            <ul className="nav--top">
                <li><Link to={ROUTES.SIGN_IN}>Zaloguj</Link></li>
                <li><Link to={ROUTES.SIGN_UP}>Załóż konto</Link></li>
            </ul>
            <ul className="nav--bottom">
                <li>
                    <Scroll activeClass="active"
                            to='#header'>
                        Start
                    </Scroll>
                </li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    )
}

export default Navigation;