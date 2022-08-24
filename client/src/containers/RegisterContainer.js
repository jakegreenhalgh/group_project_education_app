import {useState, useEffect, useReducer} from "react";
import {getUsers, postUser} from '../LoginService'
import { useNavigate, Link, useRoutes } from "react-router-dom";



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
    
            <form onSubmit={onSubmit}  id="register-form">
                <h2>Create Account</h2>
                <div className="">
                    <label htmlFor="username">Username:</label>
                    <input onChange={onChange} type="text"
                     name="username" 
                     id="username" 
                     value={formData.username.toLowerCase()} required/>
                </div>
                <div className="">
                    <label htmlFor="password">Password:</label>
                    <input onChange={onChange} type="text"
                     name="password" 
                     id="password" 
                     value={formData.password} required/>
                </div>
                <input type="submit" value="Register" id="register" />
            </form>
        )
}



export default RegisterContainer;