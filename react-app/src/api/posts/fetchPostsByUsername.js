import api_url from "../config";

export async function fetchPostsByUsername(username) {
    try {
        const response = await fetch(`${api_url}/post/userProfile/${username}`, {
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