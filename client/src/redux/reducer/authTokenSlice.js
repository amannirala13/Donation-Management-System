import {createSlice} from "@reduxjs/toolkit";

export const authTokenSlice = createSlice(
    {
        name: "authToken",
        initialState: {
            token: null,
            isLoaded: false
        },
        reducers:{
            setAuthToken: (state, value)=>{
                state.token = value.payload
            },
            setAuthTokenLoaded: (state, value)=>{
                state.isLoaded = (value.payload === true);
            }
        }
    }
)

export const {setAuthToken, setAuthTokenLoaded} = authTokenSlice.actions;
export default authTokenSlice.reducer