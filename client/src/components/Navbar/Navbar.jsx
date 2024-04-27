import React, {useEffect, useRef, useState} from "react";
import logo from "../../logo.svg";
import {HiOutlineMenu} from "react-icons/hi";
import useAuthToken from "../../hooks/useAuthToken.js";
import {
    useDisclosure,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import Paths from "../../routes/Paths.js";
import useCurrentUser from "../../hooks/useCurrentUser.js";
import MediaQuery from "react-responsive";

export const Navbar = () => {
    const [authToken, setAuthToken] = useAuthToken();
    const [currentUser, setCurrentUser] = useCurrentUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const nav = useNavigate();

    function getRoutePath(path){
        return (`${Paths.main.dashboard}/${path}`)
    }

  return (
    <div className="w-full m-0 h-[fit] border-b [border-bottom-style:solid] border-[#e3e3e3] flex lg:justify-between p-5 select-none">
        {
            (authToken.token)?
                <div className={"hover:bg-black/5 w-fit h-fit p-2 rounded-lg"} onClick={()=>{onOpen()}}>
                    <HiOutlineMenu className={"text-4xl"}/>
                </div>
                :
                <></>
        }
        <div className=" max-w-fit max-h-fit py-5 ml-4">
            <img src={logo} className={"object-contain h-[48px] m-0 block"} />
        </div>
        {
            (authToken.token)?
                <MediaQuery minWidth={1024}>
                    1024 Nav
                </MediaQuery>
                :
                <></>
        }
        NAV BAR
    </div>
  );
};