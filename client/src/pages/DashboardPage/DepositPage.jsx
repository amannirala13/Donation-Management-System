import React from "react";
import { DepositDonation } from "../../components/DepositDonation/DepositDonation";

export default ({className})=>{
    return(
        <div className={'w-full h-full p-4'}>
           <DepositDonation></DepositDonation>
        </div>
    )
}