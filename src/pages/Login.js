import React, { useState } from "react";
import { auth, provider } from "../config/Firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './form.css';


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLoggedin] = useState("Login to join the Ronaldo/Messi fanbase!");

    const navigate = useNavigate();

    const register = async () => {
        try {
            const signin = await createUserWithEmailAndPassword(auth, email, password);
            setLoggedin("You have joined the Ronaldo/Messi fanbase!")
            console.log(signin);
        } catch (error) {
            console.error(error);
        }

    }
    const googleLogin = async () => {
        try {
            const google = await signInWithPopup(auth, provider);
            console.log(google);
            setLoggedin("You have joined the Ronaldo/Messi fanbase!")
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        navigate('/');
        await signOut(auth);
        setLoggedin("Login to join the Ronaldo/Messi fanbase!");
        
};
    return(
        
            <div className="form"> 
                <h1>{loggedin}</h1>
            
                <label>Username: </label>
                <input type="username" placeholder="Username..."
                onChange = {(event) => setEmail(event.target.value)}></input>
            
                <label>Password: </label>
                <input type="password" placeholder="Password..."
                onChange = {(event) => setPassword(event.target.value)}></input>
           
                <button onClick = {register} type="submit">Submit</button>
                <h3>Or</h3>

            <button onClick = {googleLogin}>Sign In With Google</button>

            <button onClick = {logout}>Log Out</button>
       
        <nav className = "footer">
            <footer>© 2023 Copyright Ronaldo & Messi - Haashir Nawaz</footer>
        </nav>
            
        </div>

    )
}


export default Login;