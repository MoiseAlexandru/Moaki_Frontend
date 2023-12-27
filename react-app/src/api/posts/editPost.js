

export default async function editPost(postId, newPost) {
    try {
        const response = await fetch(`http://localhost:8080/post/edit/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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