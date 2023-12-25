import { postList } from "../../dummydata";

export default async function fetchPostsByLocationId(locationId) {
    try {
        const response = await fetch(`http://localhost:8080/post/get/location/${locationId}`, {
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