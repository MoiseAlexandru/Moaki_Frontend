import api_url from "../config";



export default async function unfollowUser(sender, receiver, currentUser) {
    try {
        const response = await fetch(`${api_url}/user/unfollow/${sender}/${receiver}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': currentUser
            }
        });
    }
    catch(error) {
        console.log(error);
    }
}