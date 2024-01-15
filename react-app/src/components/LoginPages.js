import { HashRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

export default function LoginPages({onLogin}) {
    console.log("AICI INTRA");
    return (
        <HashRouter>
            <Routes>
                <Route exact path = "/login" element = {<LoginPage onLogin = {onLogin} />} />
                <Route exact path = "/register" element = {<RegisterPage />} />
            </Routes> 
        </HashRouter>
    )
}