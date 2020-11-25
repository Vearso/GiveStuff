import app from 'firebase/app';
import 'firebase/auth';
import config from './config';

class Firebase {
    constructor() {
        !app.apps.length ? app.initializeApp(config) : app.app();

        this.auth = app.auth();
    }

    /// AUTH API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;