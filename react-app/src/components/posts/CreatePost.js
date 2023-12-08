import { useState } from "react";
import Searchbar from "../Searchbar";
import locationFilter from "../../api/location/locationFilter";
import LocationResult from "../locations/LocationResult";
import UploadAndDisplayImage from "../images/UploadAndDisplayImage";
import "../../css/createPost.css"
import "../../css/imageselect.css"
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

export default function CreatePost() {
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [score, setScore] = useState(5);
    const [username, setUsername] = useState("moise");
    const navigate = useNavigate();

    function handleLocationSelect(newLocation) {
        console.log(newLocation.name);
        //setLocation(newLocation.name);
    }

    function handleLocationEnter(input) {

    }

    return (
        <div>
            <h2>Create Post:</h2>
            <p>🗿 Discovered an amazing new place? Share it with the group! 🗿</p>
            <div className = "createPostContainer">
                <h4>📍 Where is this place?</h4>
                <Searchbar className = "locationSearchbar" onSelect = {handleLocationSelect} onEnter = {handleLocationEnter} filterFunction = {locationFilter} resultEntry={LocationResult} placeholderText = "Pick location..." />
                <h4>🖼️ Add an image!</h4>
                <UploadAndDisplayImage className = "imageInput"/>
                <h4>⭐ How much did you like it there?</h4>
                <input type = "number" placeholder = "Score ( ? / 10 )" className = "scoreInput" />
                <h4>💭 Write your thoughts here...</h4>
                <textarea className = "descriptionTextarea"/>
                <Button variant="postNowButton" onClick={() => {navigate("/my-profile")}}>Post Now!</Button>
            </div>
        </div>
    );

}