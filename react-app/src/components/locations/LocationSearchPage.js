import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Searchbar from "../Searchbar";
import locationFilter from "../../api/location/locationFilter";
import LocationSearchResult from "./LocationSearchResult";
import LocationResult from "./LocationResult";

export default function LocationSearchPage() {
    
    const [displayedLocations, setDisplayedLocations] = useState([]);
    const navigate = useNavigate();

    function handleLocationSelect(selectedLocation) {
        const newLocation = selectedLocation.id;
        console.log(newLocation);
        navigate(`/location/${newLocation}`);
        // <LocationSearchResults query = {newLocation} />
    }

    function handleLocationEnter(input) {
        const newDisplayedLocations = locationFilter(input);
        console.log(newDisplayedLocations);
        setDisplayedLocations(newDisplayedLocations);
    }

    return (
        <>
            <Searchbar onSelect = {handleLocationSelect} onEnter = {handleLocationEnter} filterFunction = {locationFilter} resultEntry={LocationResult}/>
            
            {displayedLocations.map((location) => <LocationSearchResult location = {location} key = {location.name} />)}
        </>
    );
}