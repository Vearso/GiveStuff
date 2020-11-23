import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import * as ROUTES from './routes';
import Home from "./layouts/Home";

import AccountSignIn from "./layouts/AccountSignIn";
import AccountSignUp from "./layouts/AccountSignUp";
import AccountSignOut from "./layouts/AccountSignOut";
import GiveStuff from "./layouts/GiveStuff";

function App() {
    return (
        <Router>
            <Switch>
                    <Route exact path={ROUTES.HOME} component={Home}/>
                    <Route path={ROUTES.SIGN_IN} component={AccountSignIn}/>
                    <Route path={ROUTES.SIGN_UP} component={AccountSignUp}/>
                    <Route path={ROUTES.SIGN_OUT} component={AccountSignOut}/>
                    <Route path={ROUTES.GIVESTUFF} component={GiveStuff}/>
            </Switch>
        </Router>
    );
}

export default App;
