import { postList } from "../../dummydata";





export default function fetchPostsByLocationId(locationId) {
    const posts = postList.filter((post) => post.locationID === locationId);
    console.log(locationId);
    return posts;
}