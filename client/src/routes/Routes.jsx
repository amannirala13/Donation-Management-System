import Paths from "./Paths.js";
import {AuthPage} from "../pages/AuthPage";
import DashboardPage from "../pages/DashboardPage/index.jsx";
import RegistrationContainer from "../components/RegisterationContainer/RegistrationContainer.jsx";
import LoginContainer from "../components/LoginContainer/index.js";
import {LoadingPage} from "../pages/LoadingPage";
import ForgotPasswordContainer from "../components/ForgotPasswordContainer/index.js";
import {CampaignDetails} from "../pages/Campaign/CampaignDetails";
import {LandingPage} from "../pages/LandingPage/LandingPage";
import {Dashboard} from "../pages/DashboardPage/Dashboard";
import CreateCampaign from "../pages/DashboardPage/CreateCampaign.jsx";

export const MainRoutes = [
    getComponentObj("", <LandingPage/>),
    getComponentObj("/campaign/:id", <CampaignDetails/>),
    getComponentObj(`${Paths.main.auth}/*`, <AuthPage/>),
    getComponentObj(`${Paths.main.dashboard}/*`, <DashboardPage/>),
    getComponentObj(`${Paths.main.create_campaign}/*`, <CreateCampaign/>),
]

export const AuthRoutes = [
    getComponentObj(Paths.auth.register, <RegistrationContainer/>),
    getComponentObj(Paths.auth.login, <LoginContainer/>),
    getComponentObj(Paths.auth.reset_password, <ForgotPasswordContainer/>),
]

export const DashboardRoutes = [
    getComponentObj("/", <Dashboard/>),
]

function getComponentObj(path, component){
    return  {route: `/${path}`, component: component}
}