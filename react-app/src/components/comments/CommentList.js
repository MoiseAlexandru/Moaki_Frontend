import CommentOverview from "./CommentOverview";

export default function CommentList({commentList}) {
    
    return (
        <div>
            {commentList.map((comment) => <CommentOverview comment={comment} key = {comment.id} />)}
        </div>
    );
}