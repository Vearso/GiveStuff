import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config';

class Firebase {
    constructor() {
        !app.apps.length ? app.initializeApp(config) : app.app();

        this.auth = app.auth();
        this.db = app.database();
    }

    /// AUTH API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    // DATABASE API

    posts = () => this.db.ref('posts');
}

export default Firebase;