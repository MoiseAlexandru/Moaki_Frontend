

export default async function editPost(postId, newPost) {
    console.log("new edited post:", newPost);
    try {
        const response = await fetch(`http://localhost:8080/post/edit/${postId}`, {
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