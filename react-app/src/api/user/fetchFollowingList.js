
export default async function fetchFollowingList(username) {
    try {
        const response = await fetch(`http://localhost:8080/user/getFollowing/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            }
        });
        const usernames = await response.json();
        return usernames;
    }
    catch(error) {
        console.log(error);
    }
}