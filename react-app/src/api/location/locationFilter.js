
import { locationList } from "../../dummydata";
import api_url from "../config";


export default async function locationFilter(query, controller) {

    /*
    if(!query)
        return [];
    const filterResults = locationList.filter((location) => location.name.toLowerCase().includes(query.toLowerCase()));
    return filterResults;
    */
    try {
        console.log("query: ", query);
        const response = await fetch(`${api_url}/location/search/${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller ? controller.signal : null
        });
        if(response.status > 200)
            return [];
        const data = await response.json();
        return data;
    }
    catch(error) {
        if(error.name !== "AbortError") {
            console.log(error);
            return [];
        }
    }
    return [];
}
