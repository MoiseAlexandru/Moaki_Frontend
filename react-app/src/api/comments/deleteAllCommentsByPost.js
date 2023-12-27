import editPost from "../posts/editPost";
import deleteComment from "./deleteComment";
import deleteOnlyComment from "./deleteOnlyComment";


export default async function deleteAllCommentsByPost(post) {

    const commentList = post.commentIds;

    for(let commentId of commentList) {
        await deleteOnlyComment(commentId);
    }
    await editPost(post.id, {...post, commentIds: []});
    
    window.location.reload(false);
}