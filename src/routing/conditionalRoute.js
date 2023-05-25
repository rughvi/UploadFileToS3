import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UserAuthContext from '../context/userAuthContext';

const ConditionalRoute = ({
    isProtected,
    redirectTo,
    children,
  }) => {
    const [userAuthToken, setUserAuthToken] = useContext(UserAuthContext);
    if(isProtected) {
        if(userAuthToken == null || userAuthToken.length ==0) {
          return <Navigate to={redirectTo} replace />;
        }
        else {
          return <>{children}</>
        }
    }
    else {
        return <>{children}</>
    } 
  }


  export default ConditionalRoute;