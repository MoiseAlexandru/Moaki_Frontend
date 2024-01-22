

export default async function fetchFollowingStatus(username, target) {
    try {
        const response = await fetch(`http://localhost:8080/user/isFollowing/${username}/${target}`, {
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