import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {withFirebase} from '../../firebase';
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
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};
    }

    onSubmit = event => {
        event.preventDefault();
        const {email, passwordOne} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(() => {
                this.setState({...initialState});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState(error);
            });

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
                <input className='form__input'
                       name="email"
                       value={email}
                       onChange={this.onChange}
                       type="text"
                />
                    Hasło
                <input className='form__input'
                       name="passwordOne"
                       value={passwordOne}
                       onChange={this.onChange}
                       type="password"
                />
                    Powtórz hasło
                <input className='form__input'
                       name="passwordTwo"
                       value={passwordTwo}
                       onChange={this.onChange}
                       type="password"
                />
                </div>
                <div className='buttons__container'>
                    <button className='button'>
                        Zaloguj sie
                    </button>
                    <button className='button' type="submit">
                        Załóż konto
                    </button>
                </div>
                {error && <p className={error}>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withFirebase(SignUpFormBase);

export default SignUpPage;

export {SignUpForm, SignUpLink};