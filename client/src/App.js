import Footer from "./components/Footer/index.js";
import Navbar from "./components/Navbar/index.js";
import {Route, Routes, useNavigate} from "react-router-dom";
import {AuthRoutes, MainRoutes} from "./routes/Routes.jsx";
import {useEffect, useState} from "react";
import {getAuthToken} from "./cookies/AuthTokenCookie.js";
import Paths from "./routes/Paths.js";
import useAuthToken from "./hooks/useAuthToken.js";
import useCurrentUser from "./hooks/useCurrentUser.js";
import getCurrentUserProfile from "./profile/getCurrentUserProfile.js";
import useCurrentUserReferralNetwork from "./hooks/useCurrentUserReferralNetwork.js";
import getReferralNetwork from "./referral/getReferralNetwork.js";


function App() {


  const [authToken, setAuthToken] = useAuthToken();
  const [currentUser, setCurrentUser] = useCurrentUser();
  const [referralNetwork, setReferralNetwork] = useCurrentUserReferralNetwork();
  const nav = useNavigate();

  useEffect(()=>{
    setAuthToken(getAuthToken());
  },[])

  useEffect(() => {
    if (!authToken.isLoaded)
      return;
    if (authToken.token) {
      getCurrentUserProfile(authToken.token).then((user)=>{
        setCurrentUser(user);
      })
          .catch((e)=>{
            console.error(e);
          });
      getReferralNetwork(authToken.token)
          .then((referralNetwork)=>{
            setReferralNetwork(referralNetwork);
          })
          .catch((e)=>{
            console.error(e);
          })
    }
    else
      nav(`${Paths.main.auth}/${Paths.auth.login}`);
  }, [authToken]);

  useEffect(() => {
    if(currentUser.isLoaded){
      if(currentUser.data){
        nav(Paths.main.dashboard);
      }
    }
  }, [currentUser]);


  return (
      <>
        <div className={""}>
          <Navbar/>
        </div>
        <div className={"h-full mb-64 w-full grid content-start"}>
          <Routes>
            {
              MainRoutes.map((route, index) => {
                return (
                    <Route key={index} path={route.route} element={route.component}/>
                )
              })
            }
          </Routes>
        </div>
        <Footer className={''}>
        </Footer>
      </>
  );
}

export default App;
