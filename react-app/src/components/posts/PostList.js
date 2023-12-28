import PostOverview from "./PostOverview";


export default function PostList({postList}) {
    return (
        <>
            {postList.map((post) => <PostOverview post = {post} isExpanded = {false} key = {post.id} />)}
        </>
    );
}