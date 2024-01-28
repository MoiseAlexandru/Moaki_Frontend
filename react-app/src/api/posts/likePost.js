import api_url from "../config";

export default async function likePost(postId, username) {
    
    try {
        const response = await fetch(`${api_url}/post/addLike/${postId}/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            }
        });
    }
    catch(error) {
        console.log(error);
        return null;
    }

}