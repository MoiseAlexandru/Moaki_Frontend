
export default async function likePost(postId, username) {
    
    try {
        const response = await fetch(`http://localhost:8080/post/addLike/${postId}/${username}`, {
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