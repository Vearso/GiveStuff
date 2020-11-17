import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import * as ROUTES from './routes';
import Home from "./layouts/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
