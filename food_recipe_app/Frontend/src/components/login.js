import React, { usestate} from "react";
import "./login.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = usestate({
        email: "",
        password:""

    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
           ...user,
           [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9000",user)
        .then( res => alert(res.data.message))
    }
    return (
        <div className="login">
        <h2>Sign In</h2> 
        <div className="container3">
        <label html for="Email Address">Email Address</label><br></br>
        <input type="text" name='email' value={user.email} placeholder="Enter Email" onChange={handleChange}></input><br></br>
        <label html For="Email Address">Password</label><br></br>
        <input type="password" name='password' value={user.password} placeholder="Enter Password"  onChange={handleChange}></input><br></br>
        <input type="checkbox"></input><label htmlFor="remember me">Remember me</label><br></br>
        <button onClick={login}>Submit</button>
        <p>Forget password</p>
        <button onClick={() => navigate("/register")}>Register</button>
        </div>
        </div>  
    );
}
export default Login;