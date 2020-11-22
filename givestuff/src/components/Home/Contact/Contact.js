import React, {useEffect, useState} from 'react'
import tribal from '../../../assets/Decoration.svg';
import facebook from '../../../assets/Facebook.svg';
import instagram from '../../../assets/Instagram.svg';
import './Contact.scss';

const initialState = {
    name: '',
    email: '',
    message: '',
    nameError: false,
    emailError: false,
    messageError: false,
}
const Contact = () => {
    const [form, setForm] = useState(initialState)
    const [success, setSuccess] = useState(false)
    const handleForm = event => {
        setSuccess(false);
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault();

        const email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const name = /^[A-Za-z\s]+$/

        if (!email.test(form.email)) {
            setForm(prev => {
                return {...prev, emailError: true}

                }
            )
        } else {
            setForm(prev => {
                return {...prev, emailError: false}
            })
        }

        if (!name.test(form.name) || form.name.split(' ').length > 1) {
            setForm(prev => {
                return {...prev, nameError: true}
            })
        } else {
            setForm(prev => {
                return {...prev, nameError: false}
            })
        }

        if (form.message.length < 120) {
            setForm(prev => {
                return {...prev, messageError: true}
            })
        } else {
            setForm(prev => {
                return {...prev, messageError: false}
            })
        }
        if (email.test(form.email) && name.test(form.name) && form.name.split(' ').length === 1 && form.message.length >= 120){
            setSuccess(true);

            //setForm(initialState);
        }
    }
    return (
        <div className='background__container'>
            <section/>
            <section className='page__contact'>
                <div className='contact__container'>
                    <h2 className="section--title">Skontaktuj się z nami</h2>
                    <img className="section--decoration" src={tribal} alt='decoration'/>
                    <p className={success ? 'form--success success-disabled' : 'success-disabled'}>Wiadomość została wysłana! Wkrótce się
                        skontaktujemy</p>
                    <form className="contact--form" onSubmit={(e) => handleSubmit(e)}>
                        <div className='inputs--container'>
                            <label className='form--label'>
                                Wpisz swoje imię
                                <input className={form.nameError ? 'form--input error':'form--input'}
                                       type='text'
                                       name='name'
                                       placeholder='Krzysztof'
                                       value={form.name}
                                       onChange={e => handleForm(e)}/>
                                <p className={form.nameError ? "form--error" : "disabled"}>Podane imię jest nieprawidłowe</p>
                            </label>
                            <label className='form--label'>
                                Wpisz swój email
                                <input className={form.emailError ? 'form--input error':'form--input'}
                                       type='text' name='email'
                                       placeholder='123@xyz.pl'
                                       value={form.email}
                                       onChange={e => handleForm(e)}/>
                                <p className={form.emailError ? "form--error" : "disabled"}>Podany email jest nieprawidłowy</p>
                            </label>
                        </div>
                        <label className='form--label'>
                            Wpisz swoją wiadomość
                            <textarea className={form.messageError ? "form--input error" : "form--input"}
                                      name='message'
                                      value={form.message}
                                      onChange={e => handleForm(e)}
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            <p className={form.messageError ? "form--error" : "disabled"}>Wiadomość musi mieć co najmniej 120 znaków</p>
                        </label>
                        <button type='submit'>Wyślij</button>
                    </form>
                </div>
            </section>
            <footer className='page__footer'>
                <div/>
                <p>Copyright by Coders Lab</p>
                <div>
                    <img src={facebook} alt='facebook'/>
                    <img src={instagram} alt='instagram'/>
                </div>
            </footer>
        </div>
    )
}

export default Contact;