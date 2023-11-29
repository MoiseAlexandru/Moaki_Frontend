import "../css/navBarContainer.css";

export default function NavBarContainer() {
    return (
        <>
        
        
        <nav class="navigation-bar">
            <img class="logo" src="moaki-logo.png" />
            <span className="titleContainer">Moaki</span>
            <a className="navButton" href="#">My Feed</a>
            <a className="navButton" href="#">Find Friends</a>
            <a className="navButton" href="#">Discover Locations</a>
        </nav>
        </>
    );
}