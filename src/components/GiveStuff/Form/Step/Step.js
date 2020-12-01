import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
    onChange,
    setBags,
    setLocalization,
    selectForm,
} from "./stepSlice";
import arrowDown from '../../../../assets/Icon-Arrow-Down.svg';
import arrowUp from '../../../../assets/Icon-Arrow-Up.svg';
import tribal from '../../../../assets/Decoration.svg';
import shirt from '../../../../assets/Icon-1.svg';
import arrows from '../../../../assets/Icon-4.svg';

const Step = ({step}) => {
    const form = useSelector(selectForm);
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [select, setSelect] = useState('wybierz');

    const handleSelect = (e) => {
        setSelect(e.target.value);
        dispatch(setBags(e.target.value));
        handleShowMenu();
    }
    const handleLocalization = e => {
        setSelect(e.target.innerText);
        dispatch(setLocalization(e.target.innerText));
        handleShowMenu();
    }

    const handleShowMenu = () => {
        setShowMenu(prevState => !prevState);
    }

    useEffect(() => {
        setSelect('wybierz');
    }, [step])

    switch (step) {
        case 1: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Zaznacz co chcesz oddać:</h2>
                    <form className='step--form radio'>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='ubrania,które nadają się do użycia'
                                   name='type'
                                   checked={true}
                                   onChange={e => dispatch(onChange(e.target))}/>
                            <span className="checkmark"/>
                            <p>ubrania,które nadają się do użycia</p>
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='ubrania, do wyrzucenia'
                                   name='type'
                                   onChange={e => dispatch(onChange(e.target))}/>
                            <span className="checkmark"/>
                            <p>ubrania, do wyrzucenia</p>
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='zabawki'
                                   name='type'
                                   onChange={e => dispatch(onChange(e.target))}/>
                            <span className="checkmark"/>
                            <p>zabawki</p>
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='książki'
                                   name='type'
                                   onChange={e => dispatch(onChange(e.target))}/>
                            <span className="checkmark"/>
                            <p>książki</p>
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='inne'
                                   name='type'
                                   onChange={e => dispatch(onChange(e.target))}/>
                            <span className="checkmark"/>
                            <p>inne</p>
                        </label>
                    </form>
                </div>
            )
        }
        case 2: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Podaj liczbę 60l worków, w które spakowałeś rzeczy:</h2>
                    <article className='step--select'>
                        <div className='step__form--select'>
                            <p className='form--info'> Liczba 60l worków:</p>
                            <div className='form--select' onClick={() => handleShowMenu()}>
                                <p className='select--selected'>{select}</p>
                                <img alt='arrow' src={showMenu ? arrowUp : arrowDown}/>
                            </div>
                        </div>
                        <ul className={showMenu ? 'select--list' : 'disabled'}>
                            <li value={1} onClick={(e) => handleSelect(e)}>1</li>
                            <li value={2} onClick={(e) => handleSelect(e)}>2</li>
                            <li value={3} onClick={(e) => handleSelect(e)}>3</li>
                            <li value={4} onClick={(e) => handleSelect(e)}>4</li>
                            <li value={5} onClick={(e) => handleSelect(e)}>5</li>
                        </ul>
                    </article>
                </div>
            )
        }
        case 3: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Lokalizacja:</h2>
                    <article className='step--select'>
                        <div className='step__form--select'>
                            <div className='form--select' onClick={() => handleShowMenu()}>
                                <p className='select--selected'>{select}</p>
                                <img alt='arrow' src={showMenu ? arrowUp : arrowDown}/>
                            </div>
                        </div>
                        <ul className={showMenu ? 'select--list list--localization' : 'disabled'}>
                            <li value='Poznań' onClick={(e) => handleLocalization(e)}>Poznań</li>
                            <li value='Warszawa' onClick={(e) => handleLocalization(e)}>Warszawa</li>
                            <li value='Kraków' onClick={(e) => handleLocalization(e)}>Kraków</li>
                            <li value='Wrocław' onClick={(e) => handleLocalization(e)}>Wrocław</li>
                            <li value='Katowice' onClick={(e) => handleLocalization(e)}>Katowice</li>
                        </ul>
                    </article>
                    <form className='step--form'>
                        <h3 className="step--subtitle">Komu chcesz pomóc?</h3>
                        <div className="checkbox__container">
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='dzieciom'
                                          onChange={e => dispatch(onChange(e.target))}/>
                                <span className="checkmark">dzieciom</span>
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='samotnym matkom'
                                          onChange={e => dispatch(onChange(e.target))}/>
                                <span className="checkmark">samotnym matkom</span>
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='bezdomnym'
                                          onChange={e => dispatch(onChange(e.target))}/>
                                <span className='checkmark'>bezdomnym </span>
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='niepełnosprawnym'
                                          onChange={e => dispatch(onChange(e.target))}/>
                                <span className="checkmark">niepełnosprawnym</span>
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='osobom starszym'
                                          onChange={e => dispatch(onChange(e.target))}/>
                                <span className="checkmark">osobom starszym</span>
                            </label>
                        </div>
                        <h3 className="step--subtitle">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                        <input className="step__form--input"
                               type='text' name='localizationSpecific'
                               value={form.localizationSpecific}
                               onChange={e => dispatch(onChange(e))}/>
                    </form>
                </div>
            )
        }
        case 4: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                    <form className='step--form'>
                        <div className='address__container'>
                            <div className="step__form--address">
                                <h3 className="step--subtitle">Adres odbioru:</h3>
                                <label>
                                    Ulica
                                    <input className="step__form--inputs"
                                           type='text'
                                           name='street'
                                           value={form.street}
                                           onChange={e => dispatch(onChange(e.target))}/>
                                </label>
                                <label>
                                    Miasto
                                    <input className="step__form--inputs"
                                           type='text'
                                           name='city'
                                           value={form.city}
                                           onChange={e => dispatch(onChange(e.target))}/>
                                </label>
                                <label>
                                    Kod pocztowy
                                    <input className="step__form--inputs"
                                           type='text'
                                           name='postCode'
                                           value={form.postCode}
                                           onChange={e => dispatch(onChange(e.target))}/>
                                </label>
                                <label>
                                    Numer telefonu
                                    <input className="step__form--inputs"
                                           type='text'
                                           name='phone'
                                           value={form.phone}
                                           onChange={e => dispatch(onChange(e.target))}/>
                                </label>
                            </div>
                            <div className="step__form--date">
                                <h3 className="step--subtitle">Termin odbioru:</h3>
                                <label>
                                    Data
                                    <input className="step__form--inputs"
                                           type='text'
                                           name='date'
                                           value={form.date}
                                           onChange={e => dispatch(onChange(e.target))}/>
                                </label>
                                <label>
                                    Godzina
                                    <input className="step__form--inputs"
                                           type='text'
                                           name='time'
                                           value={form.time}
                                           onChange={e => dispatch(onChange(e.target))}/>
                                </label>
                                <label>
                                    Uwagi dla kuriera
                                    <textarea className="step__form--textarea"
                                              value={form.note}
                                              name='note'
                                              onChange={e => dispatch(onChange(e.target))}/>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
        case 5: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Podsumowanie Twojej darowizny</h2>
                    <div className="step__give">
                        <h3 className="step--subtitle">Oddajesz:</h3>
                        <div className="step--row">
                            <img src={shirt} alt='shirt'/>
                            <p className="step--description">Worki: {form.bags}, {form.type}, {form.helpGroups.map(group => group + ', ')}</p>
                        </div>
                        <div className="step--row">
                            <img src={arrows} alt='arrows'/>
                            <p className="step--description">Dla lokalizacji: {form.localization}. {form.localizationSpecific}</p>
                        </div>
                    </div>
                    <div className='address__container address__sum'>
                        <div className="step__form--address">
                            <h3 className="step--subtitle">Adres odbioru:</h3>
                            <label>
                                Ulica
                                <input className="step__form--inputsDisabled"
                                       type='text'
                                       disabled={true}
                                       value={form.street}/>
                            </label>
                            <label>
                                Miasto
                                <input className="step__form--inputsDisabled"
                                       type='text'
                                       disabled={true}
                                       value={form.city}/>
                            </label>
                            <label>
                                Kod pocztowy
                                <input className="step__form--inputsDisabled"
                                       type='text'
                                       disabled={true}
                                       value={form.postCode}/>
                            </label>
                            <label>
                                Numer telefonu
                                <input className="step__form--inputsDisabled"
                                       type='text'
                                       disabled={true}
                                       value={form.phone}/>
                            </label>
                        </div>
                        <div className="step__form--date">
                            <h3 className="step--subtitle">Termin odbioru:</h3>
                            <label>
                                Data
                                <input className="step__form--inputsDisabled"
                                       type='text'
                                       disabled={true}
                                       value={form.date}/>
                            </label>
                            <label>
                                Godzina
                                <input className="step__form--inputsDisabled"
                                       type='text'
                                       disabled={true}
                                       value={form.time}/>
                            </label>
                            <label>
                                Uwagi dla kuriera
                                <textarea className="step__form--textareaDisabled"
                                          value={form.note}
                                          disabled={true}/>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        case 6: {
            return (
            <div className='form__thankYou'>
                <h2 className='step--title'>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</h2>
                <img src={tribal} alt='decoration'/>
            </div>
            )
        }
        default: {

        }
    }
}

export default Step;