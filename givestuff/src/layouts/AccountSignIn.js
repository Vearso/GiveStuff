import React from 'react';
import Navigation from "../components/Home/Navigation/Navigation";
import SignInPage from "../components/Account/SignIn/SignIn";


const AccountSignIn = () => {
    return (
        <section className='page__account'>
                <Navigation/>
                <SignInPage/>
        </section>
    )
}

export default AccountSignIn;