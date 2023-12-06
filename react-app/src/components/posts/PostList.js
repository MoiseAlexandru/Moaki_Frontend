import Post from "./Post";


export default function PostList({postList}) {
    return (
        <>
            {postList.map((post) => <Post post = {post} key = {post.IDPost} />)}
        </>
    );
}