import { postList } from "../../dummydata";
import api_url from "../config";

export default async function fetchPostById(postId) {
    
    try {
        const response = await fetch(`${api_url}/post/get/${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const post = await response.json();
        return post;
    }
    catch(error) {
        console.log(error);
        return null;
    }

    /*
    const post = postList.find((post) => post.IDPost === postId);
    return post;
    */
}