// Components - CategoryList, CategoryCard
import {getUsers, loginActiveUser, logoutUsers} from '../LoginService'
import {useState, useEffect, useRef}  from 'react';
import { useNavigate, Link } from "react-router-dom";
import './LoginContainer.css'

import Card from '@mui/material/Card';


// constructs login container
function LoginContainer() {

    const [allUsers, setAllUsers] = useState([])
    const [formData, setFormData] = useState(
        {
            username: "",
            password: "",
        })


    const navigate = useNavigate();

// on page load will set the state of allUsers to be the result of fetching all users in db
    useEffect(()=>{
        logoutUsers()
        getUsers().then((result)=>{
        setAllUsers(result);
        })
      }, []);

    // sets state to = login forms values
    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData)
    }
    
// clicking the login button will check if a user is on the databse and then if they are turns the value of logged_in to true
const onSubmit = (event) => {
    
        event.preventDefault();
        let logged = false
        for (let index = 0; index < allUsers.length; index++) {
            const user = allUsers[index]
            if (user.username === formData.username.toLowerCase() && user.password == formData.password) {
                loginActiveUser(user._id)
                logged = true
                navigate("../")
        }
        if(!logged){
            navigate("../loginerror")
        }
    }
}
        return (
            <>

            <div className='login'>


                            <Card 
                            elevation={12} 
                            sx={{ 
                                    padding: 10,
                                }}>
                                    <form onSubmit={onSubmit} id="login-form">
                                        <h2>Login Here</h2>
                                        <div className="">
                                            <label htmlFor="username">Name:</label> <br/>

                                            <input onChange={onChange} type="text"
                                            name="username" 
                                            id="username" 
                                            value={formData.username} required/>
                                        </div>
                                        <br/>
                                        <div className="">
                                            <label htmlFor="password">Password:</label> <br/>
                                            <input onChange={onChange} type="password"
                                            name="password" 
                                            id="password" 
                                            value={formData.password} required/>
                                        </div>
                                        <br/>
                                        <input type="submit" value="Login" id="login" />
                                    </form>    
                                    <br/>
                                <p>Not registered?</p>            
                                <Link to="/register">Create an account</Link>
                            </Card>

            </div>
                    
            </>
        )
    
};

export default LoginContainer;