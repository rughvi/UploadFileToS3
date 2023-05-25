import {Amplify,  Auth } from "aws-amplify";


const SignIn = (username, password) => {
      return Auth.signIn(username, password);
}

export const LoginService = {
  SignIn
}