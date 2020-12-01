import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from "recompose";
import {withFirebase} from '../../Firebase';
import * as ROUTES from '../../../routes';
import tribal from '../../../assets/Decoration.svg';

const SignInPage = () => (
    <div className='account'>
        <h2 className='section__title'>Zaloguj się</h2>
        <img className='decoration' src={tribal} alt='decoration'/>
        <SignInForm/>
    </div>
)

const initialState = {
    email: '',
    password: '',
    error: {
        code: null,
    }
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...initialState};
    }

    onSubmit = event => {
        const {email, password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...initialState});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                console.log(error);
                this.setState({error});
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;

        return (
            <form className='form' onSubmit={this.onSubmit}>
                <div className="inputs__container">
                    Email
                    <input className={error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found' ? 'form__input input__error' : 'form__input'}
                           name="email"
                           value={email}
                           onChange={this.onChange}
                           type="text"
                    />
                    Hasło
                    <input className={error.code === 'auth/wrong-password' ? 'form__input input__error' : 'form__input'}
                           name="password"
                           value={password}
                           onChange={this.onChange}
                           type="password"
                    />
                </div>
                <div className='buttons__container'>
                    <button className='button'>
                        Załóż konto
                    </button>
                    <button className='button' type="submit">
                        Zaloguj się
                    </button>
                </div>
                {error && <p className='error'>{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = compose(
    withFirebase,
    withRouter,
)(SignInFormBase);

export default SignInPage;
