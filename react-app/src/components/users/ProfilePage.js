import { useEffect, useState } from "react"
import fetchUserByUsername from "../../api/user/fetchUserByUsername";
import PostList from "../posts/PostList";
import { fetchPostsByUsername } from "../../api/posts/fetchPostsByUsername";


export default function ProfilePage({username}) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(function() {
        async function getUser() {
            const res = await fetchUserByUsername(username);
            console.log(res);
            setUser(res);
        }
        getUser();
    }, [username]);
    
    useEffect(function() {
        async function getUserPosts() {
            const res = await fetchPostsByUsername(username);
            setPosts(res);
        }
        getUserPosts();
    }, [username]);

    if(!user)
        return <div> Loading user... </div>;
    return (
        <>
            <div className = "user-info">
                <h2> {user.username} </h2>
                {console.log(user)}
                {/*<img src = {user.photoName} alt = {`img userului ${username}`} className = "profilePic"/>*/}
            </div>
            <PostList postList = {posts} />
        </>
    );
}