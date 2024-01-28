import api_url from "../config";


export default async function registerRequest(username, hashedPassword) {

    const newUser = {username: username, password: hashedPassword};
    console.log("new user: ", newUser);
    const response = await fetch(`${api_url}/user/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    return response;
}