import { useEffect, useState } from "react";
import PostList from "./posts/PostList";
import { fetchFeedPosts } from "../api/posts/fetchFeedPosts";

export default function FeedPage() {

    const [posts, setPosts] = useState([]);
    useEffect(function() {
        async function fetchPosts() {
            const data = await fetchFeedPosts();
            setPosts(data);
        }
        fetchPosts();
    }, [])

    return (
        <div>
            <PostList postList = {posts ? posts : []} />
        </div>
    );
}