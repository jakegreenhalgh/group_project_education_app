import { Link } from "react-router-dom";
import './LoginError.css'
import { Card } from "@mui/material";
import FeedbackIcon from '@mui/icons-material/Feedback';



const LoginError = () =>{

    return (
        <>

        <div className='login'>

            <Card 
                elevation={12} 
                sx={{ 
                        padding: 10,
                    }}>
                        <FeedbackIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} fontSize='large' />
                        <p>The user name or password were incorrect!</p>
                        <Link to="/login">Return to Login</Link>
            </Card>

        </div>

        </>
    )
};

export default LoginError;
