import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import createRoutes from './routing/routes';
import {Amplify,  Auth } from "aws-amplify";
import { AwsConfigAuth } from "./config/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginService } from './services/loginService';

import UserAuthContext from './context/userAuthContext';

const routes = createRoutes();
Amplify.configure({ Auth: AwsConfigAuth });

function App() {
  const [userAuthToken, setUserAuthToken] = useState("");
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((result) => {
              console.log(result.username);
              setUserAuthToken(result.username);              
              let idToken = result.signInUserSession.idToken.jwtToken;
              LoginService.getCognitoIdentityCredentials(idToken);
              setIsAppLoading(false);
            })
            .catch(error => {
              console.log(error);
              console.log("No current user");
              setIsAppLoading(false);
            });
    }, []);

  if(isAppLoading){
    return (
      <div className="App">
        <div>Loading</div>
      </div>
    )
  }
  else {
    return (
      <UserAuthContext.Provider value={[userAuthToken, setUserAuthToken]}>
        <div className="App">
          {routes}
        </div>
      </UserAuthContext.Provider>
    );
  }
}

export default App;
