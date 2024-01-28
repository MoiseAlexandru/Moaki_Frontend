import { useEffect, useState } from "react";
import PostOverview from "./PostOverview";
import fetchPosts from "../../api/posts/fetchPosts";
import { fetchMorePosts } from "../../api/posts/fetchMorePosts";


export default function MorePostsList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(function() {
        setUsername(localStorage.getItem("username"));
    }, []);

    useEffect(function() {
        async function getPosts() {
            if(!username)
                return;
            setIsLoading(true);
            const res = await fetchMorePosts(username);
            
            setPosts(res);
            setIsLoading(false);
        }
        getPosts();
    }, [username]);
    return (
        <div>
            {isLoading ? <div> Posts loading... </div>
            : posts.map((post) => <PostOverview post = {post} key = {post.id} />) 
            }

        </div>
    );
}