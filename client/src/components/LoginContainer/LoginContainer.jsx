import PropTypes from "prop-types";
import { Button, Input } from "@chakra-ui/react";
import logo from "../../assets/logo1.png";
import {useState} from "react";
import loginUser from "../../auth/loginUser.js";
import {useNavigate} from "react-router-dom";
import Paths from "../../routes/Paths.js";
import useAuthToken from "../../hooks/useAuthToken.js";
import useCurrentUser from "../../hooks/useCurrentUser.js";

export const LoginContainer = ({ className, children }) => {
    const [authToken, setAuthToken] = useAuthToken();
    const [currentUser, setCurrentUser] = useCurrentUser();

    LoginContainer.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node
    }

    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailInput = (e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e)=>{
        setPassword(e.target.value);
    }

    const loginEvent = ()=>{
        loginUser(email, password)
            .then(([success, token, currentUser])=>{
                if(success === true) {
                    setAuthToken(token);
                    setCurrentUser(currentUser);
                }
            })
            .catch((e)=>{
                console.error("ERR: Login user: ", e);
            })
    }

    return (
        <>
            {/* <div className={`${className}`}>
                <div className={'w-full grid place-content-start mb-16'}>
                    <span className={'text-4xl font-semibold'}>Signup now</span><br />
                    <span className={'text-md mt-[-12px]'}>Or track your exsisting application</span>
                </div>
                <Input mb={2} placeholder={"Email"} type={"email"} />
                <Input mb={8} placeholder={"Password"} type={"password"} />
                <div className={'w-full flex justify-between'}>
                    <Button variant={"link"} className={"font-normal"}>Forgot password</Button>
                    <Button pl={8} pr={8} colorScheme={'green'}>Login</Button>
                </div>
            </div> */}

            <div className="w-full h-fit flex p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 m-auto">
                    <div className=" w-full place-content-center m-auto hidden lg:block">
                        <img className="w-fit h-fit object-fill" src={logo} alt="img" />
                        <div className={"lg:text-2xl text-lg mt-2 font-bold"}>Innovating investments and technology</div>
                    </div>
                    <div className="p-5 py-[150px] flex justify-center">
                        <form className>
                            <div className={'w-full grid place mb-8'}>
                                <span className={'text-4xl font-semibold'}>Sign in</span><br />
                                <span className={'text-md mt-[-12px] mb-4'}>We need to verify your identity before you can access our services.</span>
                            </div>
                            <div>
                                <div className={"pl-2"}>Email</div>
                                <Input
                                    mb={2}
                                    placeholder={"Enter your email"}
                                    type={"email"}
                                    value={email}
                                    onChange={handleEmailInput}/>
                                <div className={"pl-2 pt-2"}>Password</div>
                                <Input
                                    mb={8}
                                    placeholder={"Enter your password"}
                                    type={"password"}
                                    left
                                    value={password}
                                    onChange={handlePasswordInput}/>
                            </div>
                            <div className={'w-full flex justify-between'}>
                                <Button variant={"link"} onClick={()=>{nav(`../${Paths.auth.register}`)}}>
                                    Create a new account
                                </Button>
                                <Button pl={8} pr={8} colorScheme={'blue'}
                                        onClick={loginEvent} isLoading={isLoading}>Login</Button>
                            </div>
                            <div className={"w-full h-full pt-4 pb-4 grid place-content-start"}>
                                <Button
                                    variant={"link"}
                                    className={"font-normal"}
                                    onClick={()=>{nav(`../${Paths.auth.reset_password}`)}}>
                                    Forgot password?
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1">
                    <p>By submitting your contract you authorize Capital Express to call or text you for the purpose of account opening even though you may be registered on DND</p>
                </div> */}
                
            </div>
            {children}
        </>
    )
}
