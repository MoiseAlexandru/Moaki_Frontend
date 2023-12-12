import { useEffect, useState } from "react";
import PostOverview from "./PostOverview";
import fetchPosts from "../../api/posts/fetchPosts";


export default function MorePostsList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(function() {
        async function getPosts() {
            setIsLoading(true);
            const res = await fetchPosts();
            setPosts(res);
            setIsLoading(false);
        }
        getPosts();
    }, []);
    return (
        <div>
            {console.log(posts)}
            {isLoading ? <div> Posts loading... </div>
            : posts.map((post) => <PostOverview post = {post} />) 
            }

        </div>
    );
}