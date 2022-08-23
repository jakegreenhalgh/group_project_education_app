
import { Link } from "react-router-dom";



const LoginError = () =>{

    return (
        <>
            <p>The user name or password where inccorect</p>
            <Link to="/login">Return to Login</Link>
        </>
    )
};

export default LoginError;
