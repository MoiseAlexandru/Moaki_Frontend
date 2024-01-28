import sleep from "../../utils/sleep";
import deleteAllCommentsByPost from "../comments/deleteAllCommentsByPost";
import api_url from "../config";

export default async function deletePost(post, username) {

    //await deleteAllCommentsByPost(post);
    try {
        const response = await fetch(`${api_url}/post/delete/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            }
        });
    }
    catch(err) {
        console.log(err);
        return null;
    }
}