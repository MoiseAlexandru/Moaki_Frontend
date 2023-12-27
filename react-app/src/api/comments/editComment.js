
export default async function editComment(commentId, newComment) {
    try {
        const response = await fetch(`http://localhost:8080/comment/edit/${commentId}`, {
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