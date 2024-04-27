import useCurrentUser from "../../hooks/useCurrentUser.js";
import {BiDollar, BiMoney, BiWallet} from "react-icons/bi";
import {Button, HStack} from "@chakra-ui/react";
import {AiFillWallet} from "react-icons/ai";
import {GiProfit} from "react-icons/gi";
import {RiLuggageDepositLine} from "react-icons/ri";
import React, {useEffect} from "react";
import {PiCoinsFill} from "react-icons/pi";

export default ({className})=>{
    const [currentUser, setCurrentUser] = useCurrentUser();

    return(
        <div className={"h-full w-full p-8"}>
            HomePage
        </div>
    )
}