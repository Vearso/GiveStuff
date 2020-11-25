import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
    onChange,
    onSubmit,
    selectStep,
} from "./stepSlice";

const Step = ({step}) => {
    const form = useSelector(selectStep);
    const dispatch = useDispatch();

    switch (step) {
        case 1: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Zaznacz co chcesz oddać:</h2>
                    <form className='step--form'>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='ubrania,które nadają się do użycia'
                                   name='type'
                                   onChange={e => dispatch(onChange(e))}/>
                            ubrania,które nadają się do użycia
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='ubrania, do wyrzucenia'
                                   name='type'
                                   onChange={e => dispatch(onChange(e))}/>
                            ubrania, do wyrzucenia
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='zabawki'
                                   name='type'
                                   onChange={e => dispatch(onChange(e))}/>
                            zabawki
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='książki'
                                   name='type'
                                   onChange={e => dispatch(onChange(e))}/>
                            książki
                        </label>
                        <label>
                            <input className='step__form--radio'
                                   type='radio'
                                   value='inne'
                                   name='type'
                                   onChange={e => dispatch(onChange(e))}/>
                            inne
                        </label>
                    </form>
                </div>
            )
        }
        case 2: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Podaj liczbę 60l worków, w które spakowałeś rzeczy:</h2>
                    <form className='step--form'>
                        <label>
                            <select className='step__form--select'
                                    name='bags'
                                    onChange={e => dispatch(onChange(e))}>
                                <option style={{display: 'none'}}>--wybierz--</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </label>
                    </form>
                </div>
            )
        }
        case 3: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Lokalizacja:</h2>
                    <form className='step--form'>
                        <label>
                            <select className='step__form--select'
                                    name='localization'
                                    onChange={e => dispatch(onChange(e))}>
                                <option style={{display: 'none'}}>--wybierz--</option>
                                <option>Poznań</option>
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Katowice</option>
                            </select>
                        </label>
                        <h3 className="step--subtitle">Komu chcesz pomóc?</h3>
                        <div className="checkbox__container">
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='Dzieciom'
                                          onChange={e => dispatch(onChange(e))}/>
                                dzieciom
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='Dzieciom'
                                          onChange={e => dispatch(onChange(e))}/>
                                samotnym matkom
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='Dzieciom'
                                          onChange={e => dispatch(onChange(e))}/>
                                bezdomnym
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='Dzieciom'
                                          onChange={e => dispatch(onChange(e))}/>
                                niepełnosprawnym
                            </label>
                            <label><input className="step__form--checkbox"
                                          type='checkbox'
                                          name='helpGroups'
                                          value='Dzieciom'
                                          onChange={e => dispatch(onChange(e))}/>
                                osobom starszym
                            </label>
                        </div>
                        <h3 className="step--subtitle">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                        <input type='text' name='localizationSpecific'
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
                        <div className="step__form--address">
                            <h3 className="step--subtitle">Adres odbioru:</h3>
                            <label>
                                Ulica
                                <input className="step__form--input"
                                       type='text'
                                       value={form.street}
                                       onChange={e => dispatch(onChange(e))}/>
                            </label>
                            <label>
                                Miasto
                                <input className="step__form--input"
                                       type='text'
                                       value={form.city}
                                       onChange={e => dispatch(onChange(e))}/>
                            </label>
                            <label>
                                Kod pocztowy
                                <input className="step__form--input"
                                       type='text'
                                       value={form.postCode}
                                       onChange={e => dispatch(onChange(e))}/>
                            </label>
                            <label>
                                Numer telefonu
                                <input className="step__form--input"
                                       type='number'
                                       value={form.phone}
                                       onChange={e => dispatch(onChange(e))}/>
                            </label>
                        </div>
                        <div className="step__form--date">
                            <h3 className="step--subtitle">Termin odbioru:</h3>
                            <label>
                                Data
                                <input className="step__form--input"
                                       type='text'
                                       value={form.date}
                                       onChange={e => dispatch(onChange(e))}/>
                            </label>
                            <label>
                                Godzina
                                <input className="step__form--input"
                                       type='text'
                                       value={form.time}
                                       onChange={e => dispatch(onChange(e))}/>
                            </label>
                            <label>
                                Uwagi dla kuriera
                                <textarea className="step__form--input"
                                       value={form.note}
                                       onChange={e => dispatch(onChange(e))}/>
                            </label>
                        </div>
                    </form>
                </div>
            )
        }
        case 5: {
            return (
                <h2>Podsumowanie</h2>
            )
        }
    }
}

export default Step;