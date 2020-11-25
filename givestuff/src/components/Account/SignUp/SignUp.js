import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from "recompose";
import {withFirebase} from '../../Firebase';
import * as ROUTES from '../../../routes';
import tribal from "../../../assets/Decoration.svg";

const SignUpPage = () => (
    <div className='account'>
        <h2 className='section__title'>Załóż konto</h2>
        <img className='decoration' src={tribal} alt='decoration'/>
        <SignUpForm/>
    </div>
);

const initialState = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: {
        code: null,
        message: null,
    },
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};
    }

    onSubmit = event => {
        event.preventDefault();
        const {email, passwordOne, passwordTwo} = this.state;
        if (passwordOne === passwordTwo) {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, passwordOne)
                .then(() => {
                    this.setState({...initialState});
                    this.props.history.push(ROUTES.HOME);
                })
                .catch(error => {
                    this.setState({error});
                });
        } else {
            this.setState({error: {message: 'Passwords must be the same'}});
        }

    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        return (
            <form className='form' onSubmit={this.onSubmit}>
                <div className="inputs__container">
                    Email
                    <input
                        className={error.code === 'auth/invalid-email' || error.code === 'auth/email-already-in-use' ? 'form__input input__error' : 'form__input'}
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                    />
                    Hasło
                    <input className={error.code === 'auth/weak-password' ? 'form__input input__error' : 'form__input'}
                           name="passwordOne"
                           value={passwordOne}
                           onChange={this.onChange}
                           type="password"
                    />
                    Powtórz hasło
                    <input
                        className={error.code === 'auth/weak-password' || passwordOne !== passwordTwo ? 'form__input input__error' : 'form__input'}
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                    />
                </div>
                <div className='buttons__container'>
                    <Link to={ROUTES.SIGN_IN} className='button'>
                        Zaloguj się
                    </Link>
                    <button className='button' type="submit">
                        Załóż konto
                    </button>
                </div>
                {error && <p className='error'>{error.message}</p>}
            </form>
        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export {SignUpForm};