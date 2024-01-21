import { useState } from "react";
import "../css/login.css";
import Button from "react-bootstrap/Button";
import encryptPass from "../utils/encryptPass";
import { Link, useNavigate } from "react-router-dom";
import requestLogin from "../api/auth/requestLogin";

export default function LoginPage({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectPass, setIncorectPass] = useState(false);

    const navigate = useNavigate();
    async function handleLogin() {
        // trebuie adaugata confirmare din backend
        const hashedPassword = encryptPass(password);
        const loginSuccess = await requestLogin(username, hashedPassword);
        if(loginSuccess) {
            localStorage.setItem("username", username);
            navigate("/my-feed")
            onLogin();
        }
        else {
            setIncorectPass(true);
        }
    }

    return (
        <>
            <div className = "loginDiv">
                <h1 className = "title">Login</h1>
                <h4 className = "subtitle">Strap in for another journey! Logging in is your ticket to a global gallery of travel wonders.</h4>
                <h4 className = "subtitle"> Share pics, swap tips, and let the adventure begin!</h4>
                <h4 className = "hashtag">🌍✈️ #JetSetLogin</h4>
                <input className = "usernameBox" type = "text" onChange = {(e) => setUsername(e.target.value)} placeholder = "username" />
                <input className = "passwordBox" type = "password" onChange = {(e) => setPassword(e.target.value)} placeholder="password" />
                <Button variant="loginButton" onClick={handleLogin}> Login </Button>
                {incorrectPass && <div> Incorrect password </div>}
                <div onClick = {() => navigate("/register")}> New here? Register now! </div>
            </div>
        </>
    )
}