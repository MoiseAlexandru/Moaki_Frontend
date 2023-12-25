
export default async function fetchLocationById(locationId) {
    try {
        const response = await fetch(`http://localhost:8080/location/get/${locationId}`, {
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