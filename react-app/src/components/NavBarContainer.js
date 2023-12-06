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
                <Button variant="navButton">My Feed</Button>
                <Button variant="navButton" onClick={() => {navigate("/users")}}> Find Friends </Button>
                <Button variant="navButton" onClick={() => {navigate("/search-location")}}> Discover Locations </Button>
            </nav>
        </>
    );
}   