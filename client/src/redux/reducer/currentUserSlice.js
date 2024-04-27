import {createSlice} from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        data: null,
        isLoaded: false,
    },
    reducers: {
        setCurrentUser: (state, data)=>{
            state.data = data.payload;
            state.isLoaded = true;
        },
        deleteCurrentUser: (state)=>{
            state.data = null;
            state.isLoaded = true;
        }
    }
})

export const {setCurrentUser, deleteCurrentUser} = currentUserSlice.actions;

export default currentUserSlice.reducer;