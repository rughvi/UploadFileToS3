import { Navigate } from 'react-router-dom'

const ConditionalRoute = ({
    isProtected,
    redirectTo,
    children,
  }) => {
    let authToken = localStorage.getItem("authToken");
    // if(isProtected) {
        return (isProtected && (authToken == null || authToken.length === 0)) ? 
                    <Navigate to={redirectTo} replace /> : 
                    <>{children}</>
    // }
    // else {
    //     return <>{children}</>
    // }    
  }


  export default ConditionalRoute;