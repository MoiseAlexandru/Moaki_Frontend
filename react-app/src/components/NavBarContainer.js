import Button from "react-bootstrap/Button";
import "../css/navBarContainer.css";
import ColorThemePicker from "./ColorThemePicker";
import { Link, useNavigate } from "react-router-dom";

export default function NavBarContainer() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navigation-bar">
                <img className="logo" src="moaki-logo.png" />
                <span className="titleContainer">Moaki</span>
                <Button variant="navButton" onClick={() => {navigate("/my-feed")}}>My Feed</Button>
                <Button variant="navButton" onClick={() => {navigate("/more-posts")}}>More Posts</Button>
                <Button variant="navButton" onClick={() => {navigate("/search-location")}}> Discover Locations </Button>
                <Button variant="navButton" onClick={() => {navigate("/profile/moise")}}>My Profile</Button>
            </nav>
        </>
    );
}   