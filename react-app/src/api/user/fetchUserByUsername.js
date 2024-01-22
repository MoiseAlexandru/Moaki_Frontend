


export default async function fetchUserByUsername(username) {
    try {
        const response = await fetch(`http://localhost:8080/user/get/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const user = await response.json();
        //console.log(user);
        return user;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}