import Button from "react-bootstrap/Button";
import "../css/navBarContainer.css";
import ColorThemePicker from "./ColorThemePicker";
import { Link, useNavigate } from "react-router-dom";

export default function NavBarContainer({onLogout}) {
    
    const navigate = useNavigate();

    function handleLogout() {
        navigate("/login");
        onLogout();
    }

    function handleProfileClick() {
        const username = localStorage.getItem("username");
        navigate(`/profile/${username}`);
    }

    return (
        <>
            <nav className="navigation-bar">
                <img className="logo" src="moaki-logo.png" />
                <span className="titleContainer">Moaki</span>
                <Button variant="navButton" onClick={() => {navigate("/my-feed")}}>My Feed</Button>
                <Button variant="navButton" onClick={() => {navigate("/more-posts")}}>More Posts</Button>
                <Button variant="navButton" onClick={() => {navigate("/search-location")}}> Discover Locations </Button>
                <Button variant="navButton" onClick={handleProfileClick}>My Profile</Button>
                <Button variant="navButton" onClick={() => handleLogout()}>Log Out</Button>
            </nav>
        </>
    );
}   