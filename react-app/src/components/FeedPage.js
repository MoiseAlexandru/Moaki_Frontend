import { useEffect, useState } from "react";
import PostList from "./posts/PostList";
import { fetchFeedPosts } from "../api/posts/fetchFeedPosts";

export default function FeedPage() {

    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("");

    useEffect(function() {
        setUsername(localStorage.getItem("username"));
    }, [])

    useEffect(function() {
        async function fetchPosts() {
            if(username === "")
                return;
            console.log(username);
            const data = await fetchFeedPosts(username);
            console.log(data);
            setPosts(data);
        }
        fetchPosts();
    }, [username])

    return (
        <div>
            <PostList postList = {posts ? posts : []} />
        </div>
    );
}