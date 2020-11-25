import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBf_lgb9FjS0Ne8R1YcIj7JyaZt70A1jpI",
    authDomain: "givestuff-b56e3.firebaseapp.com",
    databaseURL: "https://givestuff-b56e3.firebaseio.com",
    projectId: "givestuff-b56e3",
    storageBucket: "givestuff-b56e3.appspot.com",
    messagingSenderId: "288841834848",
};

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