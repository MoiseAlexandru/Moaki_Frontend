import api_url from "../config";

export default async function editComment(commentId, newComment) {
    try {
        const response = await fetch(`${api_url}/comment/edit/${commentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }
}