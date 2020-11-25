import {createSlice} from "@reduxjs/toolkit";

export const stepSlice = createSlice({
    name: 'step',
    initialState: {
        type: '',
        bags: '',
        localization: '',
        helpGroups: [],
        localizationSpecific: '',
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        note: '',

    },
    reducers: {
        onChange: (state, action) => {
            if(action.payload.target.name === 'helpGroups'){
                if(state.helpGroups.includes(action.payload.target.value)){
                    return {
                        ...state,
                        helpGroups: [...state.helpGroups].filter(item => item !== action.payload.target.value)
                    }
                } else return {
                    ...state,
                    helpGroups: [...state.helpGroups,action.payload.target.value]
                }
            }else return {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            }
        },
        onSubmit: (state, action) => {
            action.payload.preventDefault();

        }
    }
});

export const {onChange, onSubmit} = stepSlice.actions;
export const selectStep = state => state.step;
export default stepSlice.reducer;