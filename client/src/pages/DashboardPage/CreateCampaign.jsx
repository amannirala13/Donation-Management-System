import {Button, Input, InputGroup, InputRightAddon, Textarea} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import Paths from "../../routes/Paths.js";
import {useEffect, useState} from "react";
export default function CreateCampaign({className, children}){

    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [goalAmount, setGoalAmount] = useState("");
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    const onSubmit = ()=>{
        const campaign = new CreateCampaign(
            {
                title: title,
                description: description,
                createdOn: {day: day, month: month, year: year},
            }); 
        CreateCampaign(campaign)
            .then((res)=>{
                if(res.success === true){
                    nav(`/${Paths.main.dashboard}`)
                }
            })
            .catch((e)=>{
                console.error(e)
            })
    }

    return(
        <>
            <div className={"w-screen max-w-1/2 h-full grid place-content-center pb-24"}>
                <div className={"h-full mt-12"}>
                    <div className={"w-full font-left font-bold pb-4 text-4xl"}>Create a new campaign</div>
                    <div>Please provide us with details of your campaign.</div>
                    <div className={"grid gap-2 w-full pt-12"}>

                        <div className={"font-bold mb-2 text-2xl"}>Let's get to know your cause</div>
                        <Input placeholder={"Enter your title here"}
                               className={"text-3xl"}
                               value={title}
                               variant={"filled"}
                               onChange={(e) => {
                                   setTitle(e.target.value)
                               }} required/>
                        <div className={"font-bold mb-2 mt-8 text-2xl"}>Please describe your cause in details</div>
                        <Textarea placeholder={"A brief description about your campaign"}
                                  value={description}
                                  variant={"filled"}
                                  onChange={(e) => {
                                      setDescription(e.target.value)
                                  }}/>
                        <div className={"font-bold mb-2 mt-8 text-2xl"}>How much are we trying to raise?</div>
                        <Input placeholder={"Enter the fund to be raised"}
                               value={goalAmount}
                               variant={"filled"}
                               onChange={(e) => {
                                   setGoalAmount(e.target.value)
                               }}/>
                        <div className={"font-bold mb-2 mt-8 text-2xl"}>When is your campaign ending?</div>
                        <div className={"grid grid-flow-col gap-2"}>
                            <Input placeholder={"Day"}
                                   value={day}
                                   type={"number"}
                                   variant={"filled"}
                                   onChange={(e) => {
                                       setDay(e.target.value)
                                   }}/>
                            <Input placeholder={"Month"}
                                   value={month}
                                   type={"number"}
                                   variant={"filled"}
                                   onChange={(e) => {
                                       setMonth(e.target.value)
                                   }}/>
                            <Input placeholder={"Year"}
                                   value={year}
                                   type={"number"}
                                   variant={"filled"}
                                   onChange={(e) => {
                                       setYear(e.target.value)
                                   }}/>
                        </div>
                        <div className={"w-full flex justify-between mt-8"}>
                            <Button variant={"link"} onClick={() => {
                                nav(`../${Paths.dashboard}`)
                            }}>View your campaigns</Button>
                            <Button className={"px-36"} size={"lg"} colorScheme={"orange"} onClick={onSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}