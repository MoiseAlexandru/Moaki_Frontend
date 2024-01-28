import api_url from "../config";


export default async function editPost(postId, newPost) {
    
    try {
        const response = await fetch(`${api_url}/post/edit/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': newPost.username
            },
            body: JSON.stringify(newPost)
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }
}