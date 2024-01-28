import api_url from "../config";

export default async function unlikePost(postId, username) {
    
    try {
        const response = await fetch(`${api_url}/post/removeLike/${postId}/${username}`, {
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