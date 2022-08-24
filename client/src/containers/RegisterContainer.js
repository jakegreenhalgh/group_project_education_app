import {useState, useEffect, useReducer} from "react";
import {getUsers, postUser} from '../LoginService'
import { useNavigate, Link, useRoutes } from "react-router-dom";
import { Card } from "@mui/material";



function RegisterContainer() {
        const [allUsers, setAllUsers] = useState([])
        const [formData, setFormData] = useState(
        {
            username: "",
            password: "",
        })
    const navigate = useNavigate();


        useEffect(()=>{
            getUsers().then((result)=>{
            setAllUsers(result);
            })
        }, []);

        const onChange = (event) => {
            const newFormData = Object.assign({}, formData);
            newFormData[event.target.name] = event.target.value;
            newFormData.username = newFormData.username.toLocaleLowerCase()
            newFormData.saved_quiz  = []
            newFormData.favourites = []
            newFormData.read = []
            newFormData.logged_in = "false"
            
            setFormData(newFormData)
        }
    
    
    
        const onSubmit = (event) => {
            event.preventDefault();
            const compareArray = allUsers.map(user => user.username)
            console.log(formData.username)
            let isNameRegistered = compareArray.includes(formData.username)
            console.log(isNameRegistered)
        if (isNameRegistered === false) {
                    postUser(formData)
                    navigate("../login")
        }else{
            navigate("../registererror")
        }
    }

    
    
        return (
            <>

            <div className='register'>


                    <Card 
                            elevation={12} 
                            sx={{ 
                                    padding: 10,
                                }}>
                                    <form onSubmit={onSubmit}  id="register-form">
                                        <h2>Create Account</h2>
                                        <div className="">
                                            <label htmlFor="username">Username:</label> <br/>
                                            <input onChange={onChange} type="text"
                                            name="username" 
                                            id="username" 
                                            value={formData.username.toLowerCase()} required/>
                                        </div> <br/>
                                        <div className="">
                                            <label htmlFor="password">Password:</label> <br/>
                                            <input onChange={onChange} type="text"
                                            name="password" 
                                            id="password" 
                                            value={formData.password} required/>
                                        </div> <br/>
                                        <input type="submit" value="Register" id="register" />
                                    </form>
                    </Card>

            </div>
                    
            </>
    

        )
}



export default RegisterContainer;