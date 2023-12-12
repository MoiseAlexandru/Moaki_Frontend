

export default async function fetchPosts() {
    try {
        const response = await fetch(`http://localhost:8080/post/generalFeed`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }
}