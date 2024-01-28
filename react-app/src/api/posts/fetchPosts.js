import api_url from "../config";


export default async function fetchPosts() {
    try {
        const response = await fetch(`${api_url}/post/generalFeed`, {
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