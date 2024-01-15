import { useState } from "react";
import MainPage from "./components/MainPage";
import LocationSearchPage from "./components/locations/LocationSearchPage";
import LoginPage from "./components/LoginPage";

function App() {
    document.body.setAttribute("data-theme", "default-theme");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    function handleLogin() {
        isLoggedIn = true;
    }

    function handleLogout() {

    }

    return (
      <div>
        {isLoggedIn ? <MainPage onLogout = {() => setIsLoggedIn(false)} /> : <LoginPage onLogin = {() => setIsLoggedIn(true)} />}
      </div>
    );
}

export default App;
