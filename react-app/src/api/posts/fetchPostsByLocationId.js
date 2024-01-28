import { postList } from "../../dummydata";
import api_url from "../config";

export default async function fetchPostsByLocationId(locationId) {
    try {
        const response = await fetch(`${api_url}/post/get/location/${locationId}`, {
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
    /*
    const posts = postList.filter((post) => post.locationID === locationId);
    return posts;
    */
}