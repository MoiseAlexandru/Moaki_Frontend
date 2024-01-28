import api_url from "../config";

export async function fetchLikedStatus(postId, username) {
    try {
        const response = await fetch(`${api_url}/post/isLiked/${postId}/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const isLiked = await response.json();
        
        return isLiked;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}