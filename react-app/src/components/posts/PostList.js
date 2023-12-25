import PostOverview from "./PostOverview";


export default function PostList({postList}) {
    return (
        <>
            {postList.map((post) => <PostOverview post = {post} key = {post.id} />)}
        </>
    );
}