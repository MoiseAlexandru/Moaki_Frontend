import { postList } from "../../dummydata";
import imageToBase64 from "../../utils/imageToBase64";
import api_url from "../config";


export default async function createPost(postDetails, image) {

    const post = {...postDetails, image: image};
    
    try {
        const response = await fetch(`${api_url}/post/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': postDetails.username
            },
            body: JSON.stringify(post)
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }

}