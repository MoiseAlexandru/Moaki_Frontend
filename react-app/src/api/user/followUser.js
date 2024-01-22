
export default async function followUser(sender, receiver, currentUser) {
    try {
        const response = await fetch(`http://localhost:8080/user/follow/${sender}/${receiver}`, {
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