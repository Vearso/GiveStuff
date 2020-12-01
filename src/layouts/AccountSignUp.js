import React from 'react';
import Navigation from "../components/Home/Navigation/Navigation";
import SignUpPage from "../components/Account/SignUp/SignUp";


const AccountSignUp = () => {
    return(
        <section className='page__account'>
            <Navigation/>
            <SignUpPage/>
        </section>
    )
}

export default AccountSignUp;