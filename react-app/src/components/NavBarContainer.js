import Button from "react-bootstrap/Button";
import "../css/navBarContainer.css";
import ColorThemePicker from "./ColorThemePicker";

export default function NavBarContainer() {
    return (
        <>
        
            <nav className="navigation-bar">
                <img className="logo" src="moaki-logo.png" />
                <span className="titleContainer">Moaki</span>
                <Button className="navButton">My Feed</Button>{' '}
                <Button className="navButton">Find Friends</Button> {' '}
                <Button className="navButton">Discover Locations</Button> {' '}
            </nav>
        </>
    );
}