import React from 'react';

import Navigation from "../components/Home/Navigation/Navigation";
import tribal from "../assets/Decoration.svg";
import * as ROUTES from "../routes";
import {Link} from "react-router-dom";


const AccountSignIn = () => {
    return (
        <section className='page__account'>
            <Navigation/>
            <div className='account'>
                <h2 className='section__title'>Wylogowanie nastąpiło pomyślnie!</h2>
                <img className='decoration' src={tribal} alt='decoration'/>
                <Link to={ROUTES.HOME} className='button button__large'>
                    Strona Główna
                </Link>
            </div>
        </section>
    )
}

export default AccountSignIn;