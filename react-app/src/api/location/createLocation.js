

export default async function createLocation(name, address, city, country, locationString) {
    const location = {name, address, city, country, locationString};
    console.log(location)
    try {
        const response = await fetch(`http://localhost:8080/location/add`, {
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