import { useState } from "react";
import MainPage from "./components/MainPage";
import LocationSearchPage from "./components/locations/LocationSearchPage";
import LoginPages from "./components/LoginPages";

function App() {
    document.body.setAttribute("data-theme", "default-theme");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {

    }

    return (
      <div>
        {
            isLoggedIn ?
            <MainPage onLogout = {() => setIsLoggedIn(false)} />
            :
            <LoginPages onLogin = {() => setIsLoggedIn(true)} />
        }
      </div>
    );
}

export default App;
