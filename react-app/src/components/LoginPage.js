import { useState } from "react";

export default function LoginPage({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <input type = "text" onChange = {(e) => setUsername(e.target.value)} placeholder = "username" />
            <input type = "password" onChange = {(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={onLogin}> Login </button>
        </div>
    )
}