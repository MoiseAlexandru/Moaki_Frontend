import api_url from "../config";


export default async function createLocation(name, address, city, country, locationString) {
    const location = {name, address, city, country, locationString};
    console.log(location)
    try {
        const response = await fetch(`${api_url}/location/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(location)
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }

}