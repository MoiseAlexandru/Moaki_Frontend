
export async function fetchMorePosts(username) {
    try {
        const response = await fetch(`http://localhost:8080/post/morePosts/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            }
        });
        if(response.status === 500)
            return [];
        const postList = await response.json();
        return postList;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}