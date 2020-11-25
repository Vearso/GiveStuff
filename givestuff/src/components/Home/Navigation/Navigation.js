import React from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from '../../../routes';
import {Link as Scroll} from 'react-scroll';
import {useSelector} from 'react-redux';
import {selectUser} from "../../../userSlice";
import SignOut from "../../Account/SignOut/SignOut";

const Navigation = () => {
    const authUser = useSelector(selectUser)
    return (
        <nav className='header__nav'>
            {typeof authUser === "string" ? <NavigationAuth/> : <NavigationNonAuth/>}
            <ul className="nav--bottom">
                <li>
                    <Link to={ROUTES.HOME}>
                        Start
                    </Link>
                </li>
                <li>
                    <Scroll activeClass="active"
                            to='steps'
                            smooth={true}>
                        O co chodzi?
                    </Scroll>
                </li>
                <li>
                    <Scroll activeClass="active"
                            to='about'
                            smooth={true}>
                        O nas
                    </Scroll>
                </li>
                <li>
                    <Scroll activeClass="active"
                            to='whoWeHelp'
                            smooth={true}>
                        Fundacje i organizacje
                    </Scroll>
                </li>
                <li>
                    <Scroll activeClass="active"
                            to='contact'
                            smooth={true}>
                        Kontakt
                    </Scroll>
                </li>
            </ul>
        </nav>
    )
}
const NavigationAuth = () => {
    const user = useSelector(selectUser);
    return (
        <ul className="nav--top">
            <li>Cześć {user} </li>
            <li><Link to={ROUTES.GIVESTUFF}>Oddaj rzeczy</Link></li>
            <SignOut/>
        </ul>
    )
}
const NavigationNonAuth = () => {
    return (
            <ul className="nav--top">
                <li><Link to={ROUTES.SIGN_IN}>Zaloguj</Link></li>
                <li><Link to={ROUTES.SIGN_UP}>Załóż konto</Link></li>
            </ul>
    )
}

export default Navigation;