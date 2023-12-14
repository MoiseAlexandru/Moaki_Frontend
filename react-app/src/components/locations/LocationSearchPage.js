import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Searchbar from "../Searchbar";
import locationFilter from "../../api/location/locationFilter";
import LocationSearchResult from "./LocationSearchResult";
import LocationResult from "./LocationResult";
import Button from "react-bootstrap/esm/Button";

export default function LocationSearchPage() {
    
    const [displayedLocations, setDisplayedLocations] = useState([]);
    const navigate = useNavigate();

    function handleLocationSelect(selectedLocation) {
        const newLocation = selectedLocation.id;
        //console.log(newLocation);
        navigate(`/location/${newLocation}`);
        // <LocationSearchResults query = {newLocation} />
    }

    async function handleLocationEnter(input, controller) {
        console.log("input: ", input);
        const newDisplayedLocations = await locationFilter(input, controller);
        console.log(newDisplayedLocations);
        setDisplayedLocations(newDisplayedLocations);
    }

    return (
        <>
            <h2> Discover Locations... </h2>
            <p>🗿 Discover new travel destionation today! 🗿</p>
            <Searchbar onSelect = {handleLocationSelect} onEnter = {handleLocationEnter} filterFunction = {locationFilter} resultEntry={LocationResult}/>
            {displayedLocations && displayedLocations.map((location) => <LocationSearchResult location = {location} key = {location.name} />)}
            
            <div className = "centerButton">
                <Button variant = "addLocationButton" onClick = {() => {navigate("/location/create")}}> Add a new location </Button>
            </div>

        </>
    );
}