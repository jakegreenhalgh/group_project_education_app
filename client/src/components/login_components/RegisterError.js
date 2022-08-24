
import { Link } from "react-router-dom";



const RegisterError = () =>{

    return (
        <>
            <p>The username is currently in use</p>
            <Link to="/register">Create Account</Link>
        </>
    )
};

export default RegisterError;
