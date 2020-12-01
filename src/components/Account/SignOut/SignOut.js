import React from "react";
import {withFirebase} from "../../Firebase";
import {Link} from "react-router-dom";
import {SIGN_OUT} from "../../../routes";

const SignOut = ({firebase}) => (
    <li onClick={firebase.doSignOut}>
        <Link to={SIGN_OUT}>Wyloguj</Link>
    </li>
)

export default withFirebase(SignOut);