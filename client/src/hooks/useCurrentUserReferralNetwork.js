import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserReferralNetwork} from "../redux/reducer/currentUserReferralNetworkSlice.js";

export default () =>{
    const currentUserReferralNetwork = useSelector(state=>state.currentUserReferralNetwork);
    const dispatch = useDispatch();

    const updateCurrentUserReferralNetwork = (value)=>{
        dispatch(setCurrentUserReferralNetwork(value))
    }

    return [currentUserReferralNetwork, updateCurrentUserReferralNetwork];
}