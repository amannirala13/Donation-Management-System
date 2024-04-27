import {Button, Input} from "@chakra-ui/react";
import {BiArrowBack, BiSend} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import {useNavigate} from "react-router-dom";

export const ForgotPasswordContainer = ()=>{
    const nav = useNavigate()

    return(
        <div className={"w-full h-full mt-64 p-4 grid content-start justify-center"}>
            <div>
                <div className={"text-3xl font-semibold"}>Forgot Password?</div><br/>
                <span >Provide us with your email to get password reset link. Click on the link you <br/> received on the email to reset your password.</span><br/>
            </div>
            <div className={"mt-12 mb-8"}>
                <Input
                    placeholder={"Enter your email"}
                    variant={"outline"}
                    type={"email"}/>
            </div>
            <div className={"flex justify-between items-center"}>
                <Button
                    className={"w-fit flex gap-2"}
                    variant={"outline"}
                    onClick={()=>{nav(-1)}}>
                    <BiArrowBack/>
                    Back
                </Button>
                <Button className={"w-fit flex gap-2"} colorScheme={"blue"}>
                    Send link
                    <MdEmail/>
                </Button>
            </div>
        </div>
    )
}