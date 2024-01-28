import api_url from "../config";


export default async function userFilter(query, controller) {
    if(!query)
        return [];
    
    try {
        console.log("query: ", query);
        const response = await fetch(`${api_url}/user/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller ? controller.signal : null
        });
        console.log(response)
        const data = await response.json();
        console.log(data);
        const filterResults = data.filter((user) => user.username.toLowerCase().includes(query.toLowerCase()));
        return filterResults;
    }
    catch(error) {
        if(error.name !== "AbortError")
            console.log(error);
        return []
    }
    
}