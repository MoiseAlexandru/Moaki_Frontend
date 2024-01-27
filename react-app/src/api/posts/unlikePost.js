
export default async function unlikePost(postId, username) {
    
    try {
        const response = await fetch(`http://localhost:8080/post/removeLike/${postId}/${username}`, {
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