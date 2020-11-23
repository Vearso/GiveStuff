import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import * as ROUTES from './routes';
import Home from "./layouts/Home";
import Firebase, { FirebaseContext } from "./firebase";
import SignIn from "./layouts/SignIn";

function App() {
    return (
        <Router>
            <Switch>
                <FirebaseContext.Provider value={new Firebase()}>
                    <Route exact path={ROUTES.HOME} component={Home}/>
                    <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                </FirebaseContext.Provider>
            </Switch>
        </Router>
    );
}

export default App;
