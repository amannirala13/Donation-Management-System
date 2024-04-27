import { configureStore } from '@reduxjs/toolkit'
import authTokenReducer from "./reducer/authTokenSlice.js";
import currentUserReducer from "./reducer/currentUserSlice.js";
import currentUserReferralNetworkReducer from "./reducer/currentUserReferralNetworkSlice.js";
export default configureStore({
    reducer: {
        authToken: authTokenReducer,
        currentUser: currentUserReducer,
        currentUserReferralNetwork: currentUserReferralNetworkReducer,
    },
})