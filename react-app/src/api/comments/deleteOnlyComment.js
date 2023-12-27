

export default async function deleteOnlyComment(commentId) {
    
    try {
        const response = await fetch(`http://localhost:8080/comment/delete/${commentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    catch(err) {
        console.log(err);
        return null;
    }
}