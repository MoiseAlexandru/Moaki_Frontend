import { useState } from "react";
import Searchbar from "../Searchbar";
import locationFilter from "../../api/location/locationFilter";
import LocationResult from "../locations/LocationResult";
import UploadAndDisplayImage from "../images/UploadAndDisplayImage";

export default function CreatePost() {
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [score, setScore] = useState(5);
    const [username, setUsername] = useState("moise");

    function handleLocationSelect(newLocation) {
        console.log(newLocation.name);
        //setLocation(newLocation.name);
    }

    function handleLocationEnter(input) {

    }

    return (
        <div>
            <Searchbar onSelect = {handleLocationSelect} onEnter = {handleLocationEnter} filterFunction = {locationFilter} resultEntry={LocationResult} placeholderText = "Pick location..." />
            <UploadAndDisplayImage />
            <input type = "number" placeholder = "score" />
            <textarea />
        </div>
    );

}