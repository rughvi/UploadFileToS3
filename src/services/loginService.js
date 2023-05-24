import axios from 'axios';
const AuthAPIEndpoint = process.env.REACT_APP_AUTH_ENDPOINT
const LoginService = (username, password) => {
    const userData = {
        email: username,
        password: password
      };
    //   axios.post("https://reqres.in/api/login", userData).then((response) => {
    //     console.log(response.status, response.data.token);
    //   });

      return axios.post(AuthAPIEndpoint, userData);
}

export default LoginService;