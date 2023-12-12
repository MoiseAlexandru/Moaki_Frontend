import CommentOverview from "./CommentOverview";

export default function CommentList({post}) {
    return (
        <div>
            {post.comments.map((comment) => {<CommentOverview />})}
        </div>
    );
}