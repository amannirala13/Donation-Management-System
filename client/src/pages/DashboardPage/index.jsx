import MediaQuery from "react-responsive";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {DashboardRoutes} from "../../routes/Routes.jsx";

export default ()=>{
    return(
        <div className={"max-w-full w-full min-w-full h-full p-4"}>
            <Routes>
                {
                    DashboardRoutes.map((route, index)=>{
                        return(
                            <Route key={index} path={route.route} element={route.component}/>
                        )
                    })
                }
            </Routes>
        </div>
    )
}