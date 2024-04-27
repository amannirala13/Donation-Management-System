import {createSlice} from "@reduxjs/toolkit";

export const currentUserReferralNetworkSlice = createSlice({
    name: "currentUserReferralNetwork",
    initialState: {
        data: null,
        isLoaded: false
    },
    reducers: {
        setCurrentUserReferralNetwork: (state, data)=>{
            state.data = data.payload;
            state.isLoaded = true;
        },
        deleteCurrentUser: (state)=> {
            state.data = null;
            state.isLoaded = true;
        }
    }
})

export const {setCurrentUserReferralNetwork}=currentUserReferralNetworkSlice.actions;
export default currentUserReferralNetworkSlice.reducer;