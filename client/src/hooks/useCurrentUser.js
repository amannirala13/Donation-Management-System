import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCurrentUser} from "../redux/reducer/currentUserSlice.js";

export default ()=>{
    const currentUser = useSelector(state=>state.currentUser);
    const dispatch = useDispatch();
    const updateCurrentUser = (value)=>{
        dispatch(setCurrentUser(value));
    }
    return [currentUser, updateCurrentUser];
}