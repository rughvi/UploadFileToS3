import {Amplify,  Auth } from "aws-amplify";
import  AWS  from 'aws-sdk';
import { AwsConfigAuth } from "../config/auth";

const SignIn = (username, password) => {
      return Auth.signIn(username, password);
}


const getCognitoIdentityCredentials = (idToken) => {
  console.log('getCognitoIdentityCredentials')
  console.log(AwsConfigAuth);
  try{
    AWS.config.region = AwsConfigAuth.region;
  }
  catch(error){
    console.log(error);
  }
  

  var loginMap = {};
  loginMap['cognito-idp.' + AwsConfigAuth.region + '.amazonaws.com/' + AwsConfigAuth.userPoolId] = idToken;

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: AwsConfigAuth.identityPoolId,
      Logins: loginMap
  });

  AWS.config.credentials.clearCachedId();

  AWS.config.credentials.get(function(err) {
    if (err){
      console.log(err);
    }
    else {
      console.log('AWS Access Key: '+ AWS.config.credentials.accessKeyId);
      console.log('AWS Secret Key: '+ AWS.config.credentials.secretAccessKey);
      console.log('AWS Session Token: '+ AWS.config.credentials.sessionToken);
    }
});
}

export const LoginService = {
  SignIn,
  getCognitoIdentityCredentials
}