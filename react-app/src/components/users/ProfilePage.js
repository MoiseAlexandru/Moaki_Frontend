import { useEffect, useState } from "react"
import fetchUserByUsername from "../../api/user/fetchUserByUsername";
import PostList from "../posts/PostList";
import { fetchPostsByUsername } from "../../api/posts/fetchPostsByUsername";
import UploadAndDisplayImage from "../images/UploadAndDisplayImage";
import Button from "react-bootstrap/esm/Button";
import "../../css/profilePage.css";
import editUser from "../../api/user/editUser";


export default function ProfilePage({username}) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [photo, setPhoto] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);;
    /*const [username, setUsername] = useState("");

    useEffect(function() {
        setUsername(localStorage.getItem("username"));
    }, [])
    */
    useEffect(function() {
        setLoggedUser(localStorage.getItem("username"));
    }, []);

    useEffect(function() {
        async function getUser() {
            if(!username)
                return;
            const res = await fetchUserByUsername(username);
            setUser(res);
        }
        getUser();
    }, [username]);

    useEffect(function() {
        async function getUserPosts() {
            if(!username)
                return;
            const res = await fetchPostsByUsername(username);
            setPosts(res);
        }
        getUserPosts();
    }, [username]);

    useEffect(function() {
        console.log("user curent ", user);
        if(user && user.image)
            setPhoto(user.image);
    }, [user])

    function handleImageChange(image) {
        setPhoto(image)
    }

    async function handleImageSave() {
        const newUser = {...user, image: photo};
        await editUser(username, newUser);
    }

    console.log(username)
    if(!user)
        return <div> Loading user   ... </div>;
    return (
        <>
            <div className = "userInfo">
                <h2> {user.username} </h2>
                {/*{console.log(user)}
                <img src = {user.photoName} alt = {`img userului ${username}`} className = "profilePic"/>*/}
                <UploadAndDisplayImage handleImageChange = {handleImageChange} initialImage={photo} canBeChanged = {username === loggedUser} />
                
                {username === loggedUser && <Button onClick = {handleImageSave} > Save </Button>}
            </div>
            <PostList postList = {posts} />
        </>
    );
}