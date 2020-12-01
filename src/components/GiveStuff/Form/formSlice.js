import {createSlice} from "@reduxjs/toolkit";
const description =
{
    1: 'Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
    2: 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak spakować te worki znajdziesz TUTAJ.',
    3: 'Jeśli wiesz komu chcesz pomóc możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
    4: 'Podaj adres oraz termin odbioru rzeczy.',
}
export const formSlice = createSlice({
    name: 'form',
    initialState: {
        step: 1,
        description: description["1"],
    },
    reducers: {
        nextStep: state => {
            return {
                ...state,
                step: state.step + 1,
                description: description[state.step + 1],
            }
        },
        prevStep: state => {
            return {
                ...state,
                step: state.step - 1,
                description: description[state.step - 1],
            }
        }
    }
});

export const {nextStep, prevStep} = formSlice.actions;
export const selectStep = state => state.form;
export default formSlice.reducer;