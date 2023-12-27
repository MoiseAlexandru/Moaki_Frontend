import CommentOverview from "./CommentOverview";

export default function CommentList({post, commentList}) {
    
    return (
        <div>
            {commentList.map((comment) => <CommentOverview post = {post} comment={comment} key = {comment.id} />)}
        </div>
    );
}