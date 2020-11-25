import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
    nextStep,
    prevStep,
    selectStep,
} from "./formSlice";
import Step from "./Step/Step";
import {onSubmit} from "./Step/stepSlice";

const Form = () => {
    const step = useSelector(selectStep);
    const dispatch = useDispatch();
    return (
        <section className='page__form'>
            <div className={step.step < 5 ? 'form__header' : 'disabled'}>
                <div className="form__container">
                    <h2 className='form--title'>Ważne!</h2>
                    <p className='form--description'>{step.description}</p>
                </div>
            </div>
            <div className='form__content'>
                <div className="form__container">
                    <span className="form__stepNr">{step.step < 5 ? `Krok ${step.step}/4` : null}</span>
                    <Step step={step.step}/>
                    <div className='buttons__container'>
                        <button className={step.step > 1 ? 'button' : 'disabled'}
                                onClick={() => dispatch(prevStep())}>Wstecz
                        </button>
                        {step.step < 5 ? <button className='button' onClick={() => dispatch(nextStep())}>Dalej</button>
                            : <button className='button' onClick={(e)=>onSubmit(e)}>Potwierdzam</button>
                        }
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Form;