
export async function fetchFeedPosts() {
    try {
        const response = await fetch(`http://localhost:8080/post/generalFeed`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const postList = await response.json();
        return postList;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}