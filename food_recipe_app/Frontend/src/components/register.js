import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
  

import "./register.css";

const Register = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password:"",
        repeatpassword:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
           ...user,
           [name]: value
        })
    }

    const register = () => {
        const { email, password, repeatpassword } = user;
        if( email && password && (password===repeatpassword)){
            alert("successfully registered");
            axios.post("http://localhost:9000/register", user)
            .then( res => console.log(res))
        }
        else{
            alert("please enter valid input");
        }
        
    }
    return (
        <div className="register">
        <h2>Sign Up</h2> 
        <div>
        <input type="text"  name='email' value={user.email} placeholder="Email" onChange={handleChange}></input><br></br>
        
        <input type="password" name='password' value={user.password} placeholder="Password" onChange={handleChange}></input><br></br>
        <input type="password" name='repeatpassword' value={user.repeatpassword} placeholder="Repeat Password" onChange={handleChange}></input><br></br>
        <input type="checkbox"></input><label htmlFor="agree">I agree with Terms&Conditions</label>
        <button onClick={register}>Register</button>
        <button onClick={() => navigate("/login")}>Continue</button>
        
        
        </div>
        </div>  
    );
}
export default Register;