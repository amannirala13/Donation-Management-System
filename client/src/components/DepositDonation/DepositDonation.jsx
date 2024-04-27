import {Button, Input} from "@chakra-ui/react";
import { CloseIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {useNavigate} from "react-router-dom";

export const DepositDonation = ()=>{
    const nav = useNavigate()

    return(
        <div className={"w-full h-full mt-64 p-4 grid content-start justify-center"}>
            <div>
                <div className={"text-3xl font-semibold"}>How much would you like to donate?</div><br/>
            </div>
            <div className={"mt-12 mb-8"}>
                <Input
                    placeholder={"Enter the amount(in ₹)"}
                    variant={"outline"}
                    type={"number"}/>
            </div>
            <div className={"flex justify-between items-center"}>
                <Button
                    className={"w-fit flex gap-2"}
                    variant={"outline"}
                    onClick={()=>{nav(-1)}}>
                    Cancel
                    <CloseIcon/>
                </Button>
                <Button className={"w-fit flex gap-2"} colorScheme={"blue"}>
                    Donate
                    <ArrowRightIcon/>
                </Button>
            </div>
        </div>
    )
}