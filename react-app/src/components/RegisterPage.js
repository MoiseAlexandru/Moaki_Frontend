import { useNavigate } from "react-router-dom";
import encryptPass from "../utils/encryptPass";
import { useState } from "react";
import registerRequest from "../api/user/registerRequest";


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
        <div>
            <input type = "text" placeholder = "username" onChange = {(e) => setUsername(e.target.value)} />
            <input type = "password" placeholder = "password" onChange = {(e) => setPassword(e.target.value)} />
            <input type = "password" placeholder = "confirm password" onChange = {(e) => setConfirmPassword(e.target.value)} />
            <button onClick = {handleRegisterTry}> Register now! </button>
            {!passwordMatch && <p> Passwords do not match, try again. </p>}
        </div>
    )
}