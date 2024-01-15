


export default async function fetchUserByUsername(username) {
    try {
        const response = await fetch(`http://localhost:8080/user/get/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(user);
        const user = await response.json();
        return user;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}