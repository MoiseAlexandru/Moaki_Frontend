import api_url from "../config";


export default async function fetchFollowingStatus(username, target) {
    try {
        const response = await fetch(`${api_url}/user/isFollowing/${username}/${target}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            }
        });
        const status = await response.json();
        return status;
    }
    catch(error) {
        console.log(error);
    }
}