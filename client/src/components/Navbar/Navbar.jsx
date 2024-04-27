import React, {useEffect, useRef, useState} from "react";
import logo from "../../logo.svg";
import {HiOutlineMenu} from "react-icons/hi";
import useAuthToken from "../../hooks/useAuthToken.js";
import {
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import Paths from "../../routes/Paths.js";
import useCurrentUser from "../../hooks/useCurrentUser.js";
import MediaQuery from "react-responsive";
import getCurrentUserProfile from "../../profile/getCurrentUserProfile";

export const Navbar = () => {
    const [authToken, setAuthToken] = useAuthToken();
    const [currentUser, setCurrentUser] = useCurrentUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const nav = useNavigate();

    function getRoutePath(path){
        return (`${Paths.main.dashboard}/${path}`)
    }

    const onSubmit = ()=>{
        if (!authToken.isLoaded)
            return;
        if (authToken.token) {
            if(currentUser.isLoaded){
                if(currentUser.data){
                    nav(Paths.main.dashboard);
                }
            }
            else{
                getCurrentUserProfile(authToken.token).then((user)=>{
                    setCurrentUser(user);
                })
                    .catch((e)=>{
                        console.error(e);
                    });
            }
        }
        else
            nav(`${Paths.main.auth}/${Paths.auth.login}`);

    }

  return (
    <div className="w-full m-0 h-[fit] flex lg:justify-between select-none">
        <div className=" max-w-fit max-h-fit py-5 ml-4">
           <div className={"text-2xl font-black"}><span className={"text-orange-500 text-3xl"}>D</span>onato</div>
        </div>
        {
            (authToken.token)?
                <MediaQuery minWidth={1024}>

                </MediaQuery>
                :
                <></>
        }
        {
            (authToken.token)?
                <Button colorScheme={"orange"} className={"self-center m-5"} onClick={onSubmit}> Profile </Button>
                // <div className={"hover:bg-black/5 w-fit h-fit p-2 rounded-lg"} onClick={()=>{onOpen()}}>
                //     Profile
                // </div>
                :
                <Button colorScheme={"gray"} px={8} py={2} className={"self-center mx-8 my-5 hover:bg-black"} onClick={onSubmit}>Login</Button>
        }
    </div>
  );
};