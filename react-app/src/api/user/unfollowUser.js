


export default async function unfollowUser(sender, receiver, currentUser) {
    try {
        const response = await fetch(`http://localhost:8080/user/unfollow/${sender}/${receiver}`, {
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