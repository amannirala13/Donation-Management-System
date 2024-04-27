import PropTypes from "prop-types";
import { Button, Input } from "@chakra-ui/react";
import logo from "../../assets/art3.png";
import {useState} from "react";
import loginUser from "../../auth/loginUser.js";
import {useNavigate} from "react-router-dom";
import Paths from "../../routes/Paths.js";
import useAuthToken from "../../hooks/useAuthToken.js";
import useCurrentUser from "../../hooks/useCurrentUser.js";
import paths from "../../routes/Paths.js";
import {TiltDefaults} from "../../const/TiltDefaults";
import art from "../../assets/art4.png";
import {Tilt} from "react-tilt";

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
                    nav(`../../${paths.main.dashboard}`)
                }
            })
            .catch((e)=>{
                console.error("ERR: Login user: ", e);
            })
    }

    return (
        <>
            <div className="w-full h-fit flex p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 m-auto lg:w-3/4 gap-4">
                    <div className=" w-full place-content-center m-auto hidden lg:block mt-16">
                        <Tilt options={TiltDefaults} style={{height: 400, width: 550}}>
                            <img className="w-full self-center h-fill object-contain" src={logo} alt="img"/>
                        </Tilt>
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
                                <Button variant={"link"} colorScheme={"orange"} onClick={()=>{nav(`../${Paths.auth.register}`)}}>
                                    Create a new account
                                </Button>
                                <Button pl={8} pr={8} colorScheme={'orange'}
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
            </div>
            {children}
        </>
    )
}
