import React, {} from 'react';
import Navigation from "../components/Home/Navigation/Navigation";
import SignInPage from "../components/Account/SignIn/SignIn";
import {useSelector} from "react-redux";
import {selectUser} from "../userSlice";
import {useHistory} from "react-router";
import {GIVESTUFF} from "../routes";

const AccountSignIn = () => {
    const user = useSelector(selectUser);
    const history = useHistory();
    if(typeof user === 'string'){
        history.push(GIVESTUFF)
    }
    return (
        <section className='page__account'>
                <Navigation/>
                <SignInPage/>
        </section>
    )
}

export default AccountSignIn;