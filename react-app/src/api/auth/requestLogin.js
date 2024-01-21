

export default async function requestLogin(username, hashedPassword) {
    const user = {username: username, password: hashedPassword};
    //console.log(user);
    try {
        const response = await fetch(`http://localhost:8080/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(response.status === 200) {
            console.log("Login success");
            return true;
        }
        else {
            console.log("Login denied");
            return false;
        }
    }
    catch(error) {
        console.log("Error, login denied");
        return false;
    }
}   