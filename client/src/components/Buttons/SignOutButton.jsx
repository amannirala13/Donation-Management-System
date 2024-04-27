import {HiPower} from "react-icons/hi2";
import {BsPower} from "react-icons/bs";
import {deleteAuthToken} from "../../cookies/AuthTokenCookie.js";
import useAuthToken from "../../hooks/useAuthToken.js";
import useCurrentUser from "../../hooks/useCurrentUser.js";
import useCurrentUserReferralNetwork from "../../hooks/useCurrentUserReferralNetwork.js";

export default ({onClose})=>{
    const [authToken, setAuthToken] = useAuthToken();
    const [currentUser, setCurrentUser] = useCurrentUser();
    const [referralNetwork, setReferralNetwork] = useCurrentUserReferralNetwork()
    const onClickAction = ()=>{
        deleteAuthToken()
        setCurrentUser(null);
        setAuthToken(null);
        setReferralNetwork(null);
        onClose();
    }

    return(
        <div
            className={"w-full p-4 grid place-content-center bg-red-400 bg-gradient-to-t from-red-500 to-bg-red-600 rounded-xl text-white font-semibold"}
            onClick={onClickAction}>
            <div className={"flex gap-2 items-center text-lg"}>
                <BsPower className={"font-black"}/> Logout
            </div>
        </div>
    )
}