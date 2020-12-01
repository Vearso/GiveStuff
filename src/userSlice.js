import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'account',
    initialState: {
       user: {}
    },
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload,
            }
        },
        signOutUser: state => {
            return {
                ...state,
                user: {}
            }
        },
    }
})
export const {setUser, signOutUser} = userSlice.actions;
export const selectUser = state => state.account.user;
export default userSlice.reducer;