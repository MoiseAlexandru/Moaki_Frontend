import { useEffect, useState } from "react"
import fetchUserByUsername from "../../api/user/fetchUserByUsername";
import PostList from "../posts/PostList";
import { fetchPostsByUsername } from "../../api/posts/fetchPostsByUsername";


export default function ProfilePage({username}) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(function() {
        setUser(fetchUserByUsername(username))
    }, [username]);
    
    useEffect(function() {
        async function getUserPosts() {
            const res = await fetchPostsByUsername(username);
            setPosts(res);
        }
        getUserPosts();
    }, [username]);

    return (
        <>
            <div className = "user-info">
                {/*<img src = {user.photoName} alt = {`img userului ${username}`} className = "profilePic"/>*/}
            </div>
            <PostList postList = {posts} />
        </>
    );
}