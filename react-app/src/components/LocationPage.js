import LocationSearch from "./LocationSearch";
import { useState } from "react";

export default function LocationPage() {
    
    const [location, setLocation] = useState("");
    console.log(location);


    function handleLocationSelect(newLocation) {
        console.log(newLocation);
        setLocation(newLocation);
    }

    return (
        <>
            <LocationSearch initialLocation = {location} onLocationSelect = {handleLocationSelect} />
            {Array.from(Array(1000), (val, i) => <div key = {i}> {i} </div>)}
        </>
    );
}