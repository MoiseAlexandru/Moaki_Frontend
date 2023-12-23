
import { locationList } from "../../dummydata";


export default async function locationFilter(query, controller) {

    /*
    if(!query)
        return [];
    const filterResults = locationList.filter((location) => location.name.toLowerCase().includes(query.toLowerCase()));
    return filterResults;
    */
    try {
        console.log("query: ", query);
        const response = await fetch(`http://localhost:8080/location/search/${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller ? controller.signal : null
        });
        const data = await response.json();
        return data;
    }
    catch(error) {
        if(error.name !== "AbortError") {
            console.log(error);
            return null;
        }
    }
    return [];
}
