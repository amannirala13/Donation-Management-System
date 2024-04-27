import {useEffect, useState} from "react";
import {getAuthToken} from "../cookies/AuthTokenCookie.js";
import {useDispatch, useSelector} from "react-redux";
import {setAuthToken, setAuthTokenLoaded} from "../redux/reducer/authTokenSlice.js";

export default function (){
    const authToken = useSelector((state)=>state.authToken);
    const dispatch = useDispatch();
    const updateAuthToken = (value)=>{
        dispatch(setAuthToken(value));
        dispatch(setAuthTokenLoaded(true));
    }

    useEffect(() => {
        if(authToken.isLoaded === false) {
            dispatch(setAuthToken(getAuthToken()));
            dispatch(setAuthTokenLoaded(true));
        }
    }, [authToken]);

    return [authToken, updateAuthToken];
}