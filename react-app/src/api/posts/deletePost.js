import sleep from "../../utils/sleep";
import deleteAllCommentsByPost from "../comments/deleteAllCommentsByPost";

export default async function deletePost(post) {

    await deleteAllCommentsByPost(post);

    const response = await fetch(`http://localhost:8080/post/delete/${post.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}