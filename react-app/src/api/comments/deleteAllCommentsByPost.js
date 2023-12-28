import editPost from "../posts/editPost";
import deleteComment from "./deleteComment";
import deleteOnlyComment from "./deleteOnlyComment";


export default async function deleteAllCommentsByPost(post, willReload = false) {

    const commentList = post.commentIds;

    for(let commentId of commentList) {
        await deleteOnlyComment(commentId);
    }
    await editPost(post.id, {...post, commentIds: []});
    
    if(willReload === true)
        window.location.reload(false);
}