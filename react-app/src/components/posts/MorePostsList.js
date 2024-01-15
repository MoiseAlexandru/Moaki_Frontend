import { useEffect, useState } from "react";
import PostOverview from "./PostOverview";
import fetchPosts from "../../api/posts/fetchPosts";
import { fetchMorePosts } from "../../api/posts/fetchMorePosts";


export default function MorePostsList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(function() {
        async function getPosts() {
            setIsLoading(true);
            const res = await fetchMorePosts("moise");
            console.log(res);
            setPosts(res);
            setIsLoading(false);
        }
        getPosts();
    }, []);
    return (
        <div>
            {isLoading ? <div> Posts loading... </div>
            : posts.map((post) => <PostOverview post = {post} key = {post.id} />) 
            }

        </div>
    );
}