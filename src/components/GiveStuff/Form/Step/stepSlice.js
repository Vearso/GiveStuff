import {createSlice} from "@reduxjs/toolkit";

export const stepSlice = createSlice({
    name: 'step',
    initialState: {
        type: 'ubrania,które nadają się do użycia',
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
            if(action.payload.name === 'helpGroups'){
                if(state.helpGroups.includes(action.payload.value)){
                    return {
                        ...state,
                        helpGroups: [...state.helpGroups].filter(item => item !== action.payload.value)
                    }
                } else return {
                    ...state,
                    helpGroups: [...state.helpGroups,action.payload.value]
                }
            }else return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        },
        setBags: (state,action) => {
            return{
                ...state,
                bags: action.payload
            }
        },
        setLocalization: (state,action) => {
            return{
                ...state,
                localization: action.payload
            }
        },
    }
});

export const {onChange, setBags, setLocalization} = stepSlice.actions;
export const selectForm = state => state.step;
export default stepSlice.reducer;