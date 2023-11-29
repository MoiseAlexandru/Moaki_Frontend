import Button from "react-bootstrap/Button";
import "../css/navBarContainer.css";
import ColorThemePicker from "./ColorThemePicker";

export default function NavBarContainer() {
    return (
        <>
        
            <nav className="navigation-bar">
                <img className="logo" src="moaki-logo.png" />
                <span className="titleContainer">Moaki</span>
                <Button variant="navButton">My Feed</Button>{' '}
                <Button variant="navButton">Find Friends</Button> {' '}
                <Button variant="navButton">Discover Locations</Button> {' '}
                <div className = "navButton">
                    <ColorThemePicker />
                </div>
            </nav>
        </>
    );
}