import api_url from "../config";


export default async function editUser(username, user) {
    
    try {
        const response = await fetch(`${api_url}/user/edit/${username}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            },
            body: JSON.stringify(user)
        });
        
        if(response.status >= 200 && response.status < 300)
            return true;
        return false;
    }
    catch(error) {
        console.log(error);
    }
}