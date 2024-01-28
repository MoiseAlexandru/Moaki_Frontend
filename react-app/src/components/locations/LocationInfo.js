import { useEffect, useState } from "react";
import fetchLocationById from "../../api/location/fetchLocationById";


export default function LocationInfo({locationId}) {

    const [location, setLocation] = useState(null);
    
    useEffect(function() {
        async function fetchLocationData() {
            setLocation(await fetchLocationById(locationId));
        }
        fetchLocationData();
    }, [locationId]);

    if(!location)
        return <div> Loading ... </div>
    return (
        <>
            <h2> 📍 Location "{location.name}" </h2>
            <h2> 📍 {location.city}, {location.country} </h2>
        </>
    )
}