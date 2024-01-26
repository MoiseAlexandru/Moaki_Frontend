import { useEffect, useState } from "react"
import fetchUserByUsername from "../../api/user/fetchUserByUsername";
import PostList from "../posts/PostList";
import { fetchPostsByUsername } from "../../api/posts/fetchPostsByUsername";
import UploadAndDisplayImage from "../images/UploadAndDisplayImage";
import Button from "react-bootstrap/esm/Button";
import "../../css/profilePage.css";
import editUser from "../../api/user/editUser";
import imageToBase64 from "../../utils/imageToBase64";


export default function ProfilePage({username}) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [photo, setPhoto] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
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

    async function handleImageChange(image) {
        const imageString = await imageToBase64(image);
        setPhoto(imageString)
    }

    async function handleImageSave() {
        const newUser = {...user, image: photo};
        setIsEditing(false);
        await editUser(username, newUser);
    }

    console.log(username)
    if(!user)
        return <div> Loading user   ... </div>;
    return (
        <>
            <div className = "userInfo">
                <h2 className = "username"> @{user.username} </h2>
                {/*{console.log(user)}
                <img src = {user.photoName} alt = {`img userului ${username}`} className = "profilePic"/>*/}
                {/*console.log("user image:", photo)*/}
                
                <UploadAndDisplayImage handleImageChange  = {handleImageChange} className = "profilePicture" image={photo} canBeChanged = {username === loggedUser && isEditing} />
                {username === loggedUser &&
                    <>
                        {isEditing ?
                            <Button className = "editButton" onClick = {handleImageSave} > Save </Button>
                            : 
                            <Button className = "editButton" onClick = {() => setIsEditing(true)}> Edit </Button>
                        }
                    </>
                }
                
            </div>
            <PostList postList = {posts} />
        </>
    );
}