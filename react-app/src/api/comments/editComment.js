import api_url from "../config";

export default async function editComment(commentId, newComment) {
    console.log(newComment);
    try {
        const response = await fetch(`${api_url}/comment/edit/${commentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-username': newComment.username
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