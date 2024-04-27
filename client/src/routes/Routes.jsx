import Paths from "./Paths.js";
import {AuthPage} from "../pages/AuthPage";
import DashboardPage from "../pages/DashboardPage/index.jsx";
import RegistrationContainer from "../components/RegisterationContainer/RegistrationContainer.jsx";
import LoginContainer from "../components/LoginContainer/index.js";
import {LoadingPage} from "../pages/LoadingPage";
import ForgotPasswordContainer from "../components/ForgotPasswordContainer/index.js";

export const MainRoutes = [
    getComponentObj("", <LoadingPage/>),
    getComponentObj(`${Paths.main.auth}/*`, <AuthPage/>),
    getComponentObj(`${Paths.main.dashboard}/*`, <DashboardPage/>),
]

export const AuthRoutes = [
    getComponentObj(Paths.auth.register, <RegistrationContainer/>),
    getComponentObj(Paths.auth.login, <LoginContainer/>),
    getComponentObj(Paths.auth.reset_password, <ForgotPasswordContainer/>),
]

export const DashboardRoutes = []

function getComponentObj(path, component){
    return  {route: `/${path}`, component: component}
}