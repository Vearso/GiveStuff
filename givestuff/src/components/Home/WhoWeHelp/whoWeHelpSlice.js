import {createSlice} from "@reduxjs/toolkit";

export const whoWeHelpSlice = createSlice({
    name: 'whoWeHelp',
    initialState: {
        foundations: true,
        organizations: false,
        collections: false,
    },
    reducers: {
        showFoundations: state => {
            return {
                ...state,
                foundations: true,
                organizations: false,
                collections: false,
            }
        },
        showOrganizations: state => {
            return {
                ...state,
                foundations: false,
                organizations: true,
                collections: false,
            }
        },
        showCollections: state => {
            return {
                ...state,
                foundations: false,
                organizations: false,
                collections: true,
            }
        }
    }
})
export const {showFoundations, showOrganizations, showCollections} = whoWeHelpSlice.actions;
export const selectShow = state => state.whoWeHelp;
export default whoWeHelpSlice.reducer;