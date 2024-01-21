import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

export default function AuthPages({onLogin}) {
    return (
        <HashRouter>
            <Routes>
                <Route exact path = "/login" element = {<LoginPage onLogin = {onLogin} />} />
                <Route exact path = "/" element = {<LoginPage onLogin = {onLogin} />} />
                <Route exact path = "/register" element = {<RegisterPage />} />
            </Routes>
        </HashRouter>
    )
}