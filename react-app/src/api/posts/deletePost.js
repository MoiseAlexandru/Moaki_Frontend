import sleep from "../../utils/sleep";
import deleteAllCommentsByPost from "../comments/deleteAllCommentsByPost";
import api_url from "../config";

export default async function deletePost(post, username) {

    //await deleteAllCommentsByPost(post);
    console.log(post.username, username);
    console.log(post.id)
    try {
        const response = await fetch(`${api_url}/post/delete/${post.id}`, {
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