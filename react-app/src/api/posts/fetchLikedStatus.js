
export async function fetchLikedStatus(postId, username) {
    try {
        const response = await fetch(`http://localhost:8080/post/isLiked/${postId}/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const isLiked = await response.json();
        console.log("isLiked", isLiked);
        return isLiked;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}