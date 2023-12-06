import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Searchbar from "../Searchbar";
import locationFilter from "../../api/location/locationFilter";
import LocationSearchResults from "./LocationSearchResults";
import LocationResult from "./LocationResult";

export default function LocationPage() {
    
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    console.log(location);


    function handleLocationSelect(location, fromClick) {
        const newLocation = location.name;
        setLocation(newLocation);
        if(fromClick === true) {
            navigate(`/location/${newLocation}`);
            return;
        }
        // <LocationSearchResults query = {newLocation} />
    }

    return (
        <>
            <Searchbar onSelect = {handleLocationSelect} filterFunction = {locationFilter} resultEntry={LocationResult}/>
            
            {Array.from(Array(1000), (val, i) => <div key = {i}> {i} </div>)}
        </>
    );
}