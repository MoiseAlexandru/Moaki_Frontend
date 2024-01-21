import { useState } from "react";
import MainPage from "./components/MainPage";
import LocationSearchPage from "./components/locations/LocationSearchPage";
import { useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AuthPages from "./components/AuthPages";

function App() {
    document.body.setAttribute("data-theme", "default-theme");
    
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const username = localStorage.getItem('username');
        if(username)
            return true;
        return false;
    });
    
    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        localStorage.removeItem("username");
        setIsLoggedIn(false);
    }

    console.log(isLoggedIn);
    return (
      <div>
        {
            isLoggedIn ?
            <MainPage onLogout = {handleLogout} />
            :
            <AuthPages onLogin = {handleLogin} />
        }
      </div>
    );
    
}

export default App;
