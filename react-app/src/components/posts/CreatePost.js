import { useState } from "react";
import Searchbar from "../Searchbar";
import locationFilter from "../../api/location/locationFilter";
import LocationResult from "../locations/LocationResult";
import UploadAndDisplayImage from "../images/UploadAndDisplayImage";
import "../../css/createPost.css"
import "../../css/imageselect.css"
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import createPost from "../../api/posts/createPost";

export default function CreatePost() {
    const [locationName, setLocationName] = useState("");
    const [location, setLocation] = useState(null);
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [score, setScore] = useState(5);
    const [username, setUsername] = useState("moise");
    const navigate = useNavigate();

    function handleLocationSelect(newLocation) {
        setLocationName(newLocation.name);
        setLocation(newLocation);
    }

    async function handleLocationEnter(input) {
        const results = await locationFilter(input);
        if(results.length === 0)
            return;
        setLocation(results[0]);
        setLocationName(results[0].name);
        return results[0].name;
    }

    function handleImageChange(image) {
        setPhoto(image);
    }

    function handleScoreChange(event) {

    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    async function handleSave() {
        
        await createPost({
            IDPost: getRandomInt(10000),
            locationID: location.id,
            username: "Wanderlust24",
            description: description,
            score: score,
            likes: 0,
            comments: []
        }, photo);

        navigate("/my-feed");
    }


    return (
        <div>

            <h2>Create Post:</h2>
            <p>🗿 Discovered an amazing new place? Share it with the group! 🗿</p>
            <div className = "createPostContainer">
                <h4>📍 Where is this place?</h4>
                <Searchbar className = "locationSearchbar" onSelect = {handleLocationSelect} onEnter = {handleLocationEnter} filterFunction = {locationFilter} resultEntry={LocationResult} placeholderText = "Pick location..." forcedValue={locationName}/>
                <h4>🖼️ Add an image!</h4>
                <UploadAndDisplayImage className = "imageInput" handleImageChange = {handleImageChange}/>
                <h4>⭐ How much did you like it there?</h4>
                <input type = "number" placeholder = "Score ( ? / 10 )" className = "scoreInput" onChange = {(e) => handleScoreChange(e)} />
                <h4>💭 Write your thoughts here...</h4>
                <textarea className = "descriptionTextarea" onChange = {(e) => setDescription(e.target.value)} />
                <Button variant="postNowButton" onClick={handleSave}>Post Now!</Button>
            </div>
        </div>
    );

}