import api_url from "../config";

export default async function fetchLocationById(locationId) {
    try {
        const response = await fetch(`${api_url}/location/get/${locationId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }
}