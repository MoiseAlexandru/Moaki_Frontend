import { useState } from "react";
import Searchbar from "../Searchbar";
import locationFilter from "../../api/location/locationFilter";
import LocationResult from "../locations/LocationResult";
import UploadAndDisplayImage from "../images/UploadAndDisplayImage";

export default function CreatePost() {
    const [locationName, setLocationName] = useState("");
    const [location, setLocation] = useState(null);
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [score, setScore] = useState(5);
    const [username, setUsername] = useState("moise");

    console.log(locationName);

    function handleLocationSelect(newLocation) {
        setLocationName(newLocation.name);
        setLocation(newLocation);
    }

    function handleLocationEnter(input) {
        const results = locationFilter(input);
        if(results.length === 0)
            return;
        setLocation(results[0]);
        setLocationName(results[0].name);
    }

    return (
        <div>
            <Searchbar onSelect = {handleLocationSelect} onEnter = {handleLocationEnter} filterFunction = {locationFilter} resultEntry={LocationResult} placeholderText = "Pick location..." forcedValue = {locationName} />
            <UploadAndDisplayImage />
            <input type = "number" placeholder = "score" />
            <textarea />
        </div>
    );

}