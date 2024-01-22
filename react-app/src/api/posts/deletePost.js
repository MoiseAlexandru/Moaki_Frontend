import sleep from "../../utils/sleep";
import deleteAllCommentsByPost from "../comments/deleteAllCommentsByPost";

export default async function deletePost(post, username) {

    //await deleteAllCommentsByPost(post);
    console.log(post.username, username);
    console.log(post.id)
    try {
        const response = await fetch(`http://localhost:8080/post/delete/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            }
        });
        console.log(response)
    }
    catch(err) {
        console.log(err);
        return null;
    }
}