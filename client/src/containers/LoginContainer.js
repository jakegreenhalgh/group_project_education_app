// Components - CategoryList, CategoryCard
import {getUsers, loginActiveUser, logoutUsers} from '../LoginService'
import {useState, useEffect, useRef}  from 'react';
import { useNavigate } from "react-router-dom";


// constructs login container
function LoginContainer() {

    const [allUsers, setAllUsers] = useState([])
    const [formData, setFormData] = useState(
        {
            username: "",
            password: "",
        })
    const [activeUser, setActiveUser] = useState();


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
        for (let index = 0; index < allUsers.length; index++) {
            let user = allUsers[index]
            if (user.username === formData.username.toLowerCase() && user.password == formData.password) {
                setActiveUser(user)
                loginActiveUser(user._id)
                navigate("../")
        }}
    if (!activeUser){
        navigate("../loginerror")
    }
    };
        
    
    
        return (
            <>
            <form onSubmit={onSubmit} id="login-form">
                <h2>Login In</h2>
                <div className="">
                    <label htmlFor="username">Name:</label>
                    <input onChange={onChange} type="text"
                     name="username" 
                     id="username" 
                     value={formData.username} required/>
                </div>
                <div className="">
                    <label htmlFor="password">Password:</label>
                    <input onChange={onChange} type="password"
                     name="password" 
                     id="password" 
                     value={formData.password} required/>
                </div>
                <input type="submit" value="Login" id="login" />
            </form>                
            </>
        )
    
};

export default LoginContainer;