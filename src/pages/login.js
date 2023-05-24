import './login.css';
import {useState} from 'react';
import LoginService from '../services/loginService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
        
    const handleLogin = (event) => {
        // Prevent page reload
        event.preventDefault();

        console.log(username);
        console.log(password);
        //validate and call API endpoint
        console.log(process.env.REACT_APP_AUTH_ENDPOINT);
        LoginService(username, password)
            .then((response) => {
                console.log(response.status, response.data.token);
                localStorage.setItem("authToken", response.data.token);

            })
            .catch((error) => {
                console.log(error);
                toast("An error occured")
            });

            navigate("/home");
      };

    return(
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleLogin}>
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    name="username"
                    required
                    onChange={e => setUserName(e.target.value)}
                    />
                    {renderErrorMessage("username")}
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    name="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                    />
                    {renderErrorMessage("password")}
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p>
                </div>                
            </form>
            <ToastContainer position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
        </div>
    )
};

export default Login;