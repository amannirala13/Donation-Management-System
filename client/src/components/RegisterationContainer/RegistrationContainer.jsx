import {Button, Input, InputGroup, InputRightAddon} from "@chakra-ui/react";
import logo1 from "../../assets/logo1.png";
import {useEffect, useState} from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import {complex} from "framer-motion";
import {useNavigate} from "react-router-dom";
import Paths from "../../routes/Paths.js";
import User from "../../model/UserModel.js";
import registerUser from "../../auth/registerUser.js";
import {setAuthTokenCookie} from "../../cookies/AuthTokenCookie.js";
export default function RegistrationContainer({className, children}){

    const nav = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);
    const [address, setAddress] = useState("");
    const [referralCode, setReferralCode] = useState("");

    const toggleShowPassword = ()=>{
        setShowPassword(!showPassword);
    }

    const toggleShowConfirmPassword = ()=>{
        setShowConfirmPassword(!showConfirmPassword);
    }

    const validateData = ()=>{
        if (email === "")
            return false;

        if (password.length < 8)
            return false;

        if(password !== confirmPassword)
            return false;

        if (firstName === "")
            return false;

        if(day && (day < 1 || day > 31)){
            setDay(null);
            return false;
        }

        if(month && (month < 1 || month > 12)){
            setMonth(null);
            return false;
        }

        if(year && (year < 1910 || year > new Date().getFullYear())){
            setYear(null);
            return false;
        }

        return address.length >= 6;
    }

    const onSubmit = ()=>{
        if (!validateData())
            return;
        const user = new User(
            {
                email: email,
                password: password,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                dob: {day: day, month: month, year: year},
                address: address,
                referredBy: referralCode,
            });
        registerUser(user)
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
                    <div className={"w-full font-left font-bold pb-4 text-4xl"}>Create a new account</div>
                    <div>Please provide us with your details so that we can verify your identity and you can start using our services.</div>
                    <div className={"grid gap-2 w-full pt-12"}>
                        <div>Email</div>
                        <Input placeholder={"Enter your email"}
                               value={email}
                               onChange={(e)=>{setEmail(e.target.value)}}/>
                        <div>Password</div>
                        <InputGroup>
                            <Input
                                placeholder={"Enter a new password"}
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                                type={(showPassword?"text": "password")}/>
                            <InputRightAddon className={"hover:bg-black/10 active:bg-black/20"} onClick={toggleShowPassword}>
                                    <BsFillEyeSlashFill className={"w-full"}/>
                            </InputRightAddon>
                        </InputGroup>
                        <InputGroup>
                            <Input placeholder={"Confirm your password"}
                                   value={confirmPassword}
                                   onChange={(e)=>{setConfirmPassword(e.target.value)}}
                                   type={(showConfirmPassword?"text": "password")}/>
                            <InputRightAddon className={"hover:bg-black/10 active:bg-black/20"} onClick={toggleShowConfirmPassword}>
                                <BsFillEyeSlashFill className={"w-full"}/>
                            </InputRightAddon>
                        </InputGroup>
                        <div className={"mt-8"}>Name</div>
                        <Input placeholder={"Enter your first name"}
                               value={firstName}
                               onChange={(e)=>{setFirstName(e.target.value)}}/>
                        <Input placeholder={"Enter your middle name"}
                               value={middleName}
                               onChange={(e)=>{setMiddleName(e.target.value)}}/>
                        <Input placeholder={"Enter your last name"}
                               value={lastName}
                               onChange={(e)=>{setLastName(e.target.value)}}/>
                        <div>Date of birth</div>
                        <div className={"grid grid-flow-col gap-2"}>
                            <Input placeholder={"Day"}
                                   value={day}
                                   type={"number"}
                                   onChange={(e)=>{setDay(e.target.value)}}/>
                            <Input placeholder={"Month"}
                                   value={month}
                                   type={"number"}
                                   onChange={(e)=>{setMonth(e.target.value)}}/>
                            <Input placeholder={"Year"}
                                   value={year}
                                   type={"number"}
                                   onChange={(e)=>{setYear(e.target.value)}}/>
                        </div>
                        <div>Address</div>
                        <Input placeholder={"Enter your full address with PIN code"}
                               value={address}
                               onChange={(e)=>{setAddress(e.target.value)}}/>
                        <div className={"mt-8"}>Referral code</div>
                        <Input placeholder={"Enter referral code (optional)"}
                               value={referralCode}
                               onChange={(e)=>{setReferralCode(e.target.value)}}/>
                        <div className={"w-full flex justify-between mt-8"}>
                            <Button colorScheme={"orange"} variant={"link"} onClick={()=>{nav(`../${Paths.auth.login}`)}}>Already have an account?</Button>
                            <Button colorScheme={"orange"} className={"px-12"} size={"lg"} onClick={onSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}