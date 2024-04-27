import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../../routes/Routes.jsx";

export const AuthPage = ()=>{
    return (
            <Routes>
                {
                    AuthRoutes.map((route, index)=>{
                        return(
                            <Route key={index} path={route.route} element={route.component}/>
                        )
                    })
                }
            </Routes>
    )
}