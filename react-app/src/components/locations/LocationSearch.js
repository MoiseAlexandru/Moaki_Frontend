import { useState } from "react";
import LocationResult from "./LocationResult";
import "../../css/locations.css";

const locationList = [
        {
        "id": 1,
        "name": "Ocean View Resort",
        "city": "Miami",
        "country": "USA",
        "reviews": 150,
        "rating": 8.5
      },
      {
        "id": 2,
        "name": "Alpine Heights Lodge",
        "city": "Denver",
        "country": "USA",
        "reviews": 120,
        "rating": 9.0
      },
      {
        "id": 3,
        "name": "Bayside Retreat",
        "city": "San Francisco",
        "country": "USA",
        "reviews": 200,
        "rating": 7.8
      },
      {
        "id": 4,
        "name": "Blissful Haven",
        "city": "Paris",
        "country": "France",
        "reviews": 180,
        "rating": 8.2
      },
      {
        "id": 5,
        "name": "Sunset Oasis",
        "city": "Los Angeles",
        "country": "USA",
        "reviews": 250,
        "rating": 9.5
      },
      {
        "id": 6,
        "name": "Serenity Villa",
        "city": "Sydney",
        "country": "Australia",
        "reviews": 170,
        "rating": 8.0
      },
      {
        "id": 7,
        "name": "Mountain View Lodge",
        "city": "Denver",
        "country": "USA",
        "reviews": 130,
        "rating": 7.9
      },
      {
        "id": 8,
        "name": "City Lights Inn",
        "city": "San Francisco",
        "country": "USA",
        "reviews": 190,
        "rating": 8.7
      },
      {
        "id": 9,
        "name": "Tranquil Retreat",
        "city": "Paris",
        "country": "France",
        "reviews": 220,
        "rating": 8.9
      },
      {
        "id": 10,
        "name": "Coastal Bliss Lodge",
        "city": "Miami",
        "country": "USA",
        "reviews": 210,
        "rating": 9.2
        }
];

export default function LocationSearch({initialLocation, onLocationSelect}) {

    const [location, setLocation] = useState(initialLocation);
    const results = location === "" ? [] : locationList.filter((result) => result.name.toLowerCase().includes(location.toLowerCase()));
    
    function handleLocationChange(newLocation) {
        setLocation(newLocation);
    }

    function handleLocationSelect(result) {
        setLocation(result)
        onLocationSelect(result)
    }

    return (
        <div className = "containerSearchAndResults">
            <input className = "searchbar" type = "text" value = {location} onChange = {(e) => handleLocationChange(e.target.value)} />
            
            <div className="locationResultsBox">
                {results.map(result => (
                    <li key = {result.id} onClick = {() => {handleLocationSelect(result.name)}}>
                        <LocationResult location = {result}  />
                    </li>
                ))}
            </div>
        </div>
    );
}