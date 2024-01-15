import { useState } from "react";
import "../css/login.css";
import Button from "react-bootstrap/Button";
import encryptPass from "../utils/encryptPass";

export default function LoginPage({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        // trebuie adaugata confirmare din backend
        const hashedPassword = encryptPass(password);
        //
        onLogin();
    }

    return (
        <div className = "loginDiv">
            <h1 className = "title">Login</h1>
            <h4 className = "subtitle">Strap in for another journey! Logging in is your ticket to a global gallery of travel wonders.</h4>
            <h4 className = "subtitle"> Share pics, swap tips, and let the adventure begin!</h4>
            <h4 className = "hashtag">🌍✈️ #JetSetLogin</h4>
            <input className = "usernameBox" type = "text" onChange = {(e) => setUsername(e.target.value)} placeholder = "username" />
            <input className = "passwordBox" type = "password" onChange = {(e) => setPassword(e.target.value)} placeholder="password" />
            <Button variant="loginButton" onClick={handleLogin}> Login </Button>
        </div>
    )
}