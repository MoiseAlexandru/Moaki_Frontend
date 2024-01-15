
export async function fetchPostsByUsername(username) {
    try {
        const response = await fetch(`http://localhost:8080/post/userProfile/${username}`, {
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