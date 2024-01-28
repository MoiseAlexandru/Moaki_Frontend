import api_url from "../config";

export default async function fetchFollowingList(username) {
    try {
        const response = await fetch(`${api_url}/user/getFollowing/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            }
        });
        if(response.status > 200)
            return [];
        const usernames = await response.json();
        return usernames;
    }
    catch(error) {
        console.log(error);
        return [];
    }
}