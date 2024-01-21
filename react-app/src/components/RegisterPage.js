import { useNavigate } from "react-router-dom";
import encryptPass from "../utils/encryptPass";
import { useState } from "react";
import registerRequest from "../api/user/registerRequest";
import "../css/register.css";
import Button from "react-bootstrap/Button";


export default function RegisterPage({onRegister}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const navigate = useNavigate();
    async function handleRegisterTry() {
        if(password !== confirmPassword) {
            setPasswordMatch(false);
            return;
        }
        const hashedPassword = encryptPass(password);
        console.log(hashedPassword);
        const res = await registerRequest(username, hashedPassword);
        if(res.status === 201) {
            navigate("/login");
        }
        else {
            console.log("Error occured: ", res);
            return;
        }
    }

    return (
        <div className = "registerDiv">


            <h1 className = "title">Registration</h1>
            <h4 className = "hashtag">Welcome to Moaki - Your Social Hub for Travelers!</h4>
            <h4 className = "subtitle">Embark on a journey of discovery and connection with Moaki, the ultimate social media app designed exclusively for passionate travelers like you.</h4>
            <h4 className = "subtitle">Join our vibrant community and share your adventures with fellow explorers from around the globe.</h4>
            <input className = "usernameBox" type = "text" placeholder = "username" onChange = {(e) => setUsername(e.target.value)} />
            <input className = "passwordBox" type = "password" placeholder = "password" onChange = {(e) => setPassword(e.target.value)} />
            <input className = "passwordBox" type = "password" placeholder = "confirm password" onChange = {(e) => setConfirmPassword(e.target.value)} />
            <Button variant="registerButton" onClick={handleRegisterTry}> Register now! </Button>
            {!passwordMatch && <p> Passwords do not match, try again. </p>}
            <div onClick = {() => navigate("/login")}> Login instead </div>
        </div>
    )
}
