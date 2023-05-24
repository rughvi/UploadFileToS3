import './login.css';
import {useState} from 'react';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

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
        
        </div>
    )
};

export default Login;