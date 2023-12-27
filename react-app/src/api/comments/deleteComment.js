import editPost from "../posts/editPost";
import deleteOnlyComment from "./deleteOnlyComment";




export default async function deleteComment(post, commentId) {
    
    const response1 = await deleteOnlyComment(commentId);

    const newCommentIds = post.commentIds.filter((commId) => (commId !== commentId))

    const response2 = await editPost(post.id, {...post, commentIds: newCommentIds});
    
}