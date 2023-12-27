import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import createComment from "../../api/comments/createComment";
import deleteAllCommentsByPost from "../../api/comments/deleteAllCommentsByPost";

export default function CreateComment({post}) {
    const [content, setContent] = useState("");
    const [username, setUsername] = useState("moise");
    const navigate = useNavigate();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    async function handleSave() {
        
        await createComment({
            id: getRandomInt(10000),
            username: username,
            content: content,
        }, post);

        window.location.reload(false);
    }

    async function handleDeleteAll() {
        await deleteAllCommentsByPost(post);
    }

    return (
        <div>
            <h2>Create Comment:</h2>
            <p>🗿 Care to comment on this? Share it with the group! 🗿</p>
            <div className = "createCommContainer">
                <h4>💭 Comment here...</h4>
                <textarea className = "commTextarea" onChange = {(e) => setContent(e.target.value)} />
                <Button variant="commNowButton" onClick={handleSave}>Comment Now!</Button>
            </div>
            <div>
                Strict pt debug!
                <Button variant = "danger" onClick = {() => handleDeleteAll()} > Sterge toate commenturile </Button>
            </div>
        </div>
    );
}