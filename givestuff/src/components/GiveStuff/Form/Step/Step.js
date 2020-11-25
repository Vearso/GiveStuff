import React from 'react'


const Step = ({step}) => {
    switch (step) {
        case 1: {
            return (
                <div className='form__steps'>
                    <h2 className='step--title'>Zaznacz co chcesz oddać:</h2>
                    <form className='step--form'>
                        <label>
                            <input type='radio'></input>
                            ubrania,które nadają się do użycia</label>
                        <label>
                            <input type='radio'></input>
                            ubrania, do wyrzucenia</label>
                        <label>
                            <input type='radio'></input>
                            zabawki</label>
                        <label>
                        <input type='radio'></input>
                        książki</label>
                        <label>
                            <input type='radio'></input>
                            inne</label>
                    </form>
                </div>
            )
        }
        case 2: {
            return (
                <h2>STEP 2</h2>
            )
        }
        case 3: {
            return (
                <h2>STEP 3</h2>
            )
        }
        case 4: {
            return (
                <h2>STEP 4</h2>
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