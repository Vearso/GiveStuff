import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {Provider} from 'react-redux';
import App from './App';
import store from "./store";
import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
</FirebaseContext.Provider>,
    document.getElementById('root')
);

