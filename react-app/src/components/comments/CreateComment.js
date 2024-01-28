import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import createComment from "../../api/comments/createComment";
import deleteAllCommentsByPost from "../../api/comments/deleteAllCommentsByPost";
import "../../css/createComment.css";

export default function CreateComment({post}) {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    async function handleSave() {
        const username = localStorage.getItem("username");
        await createComment({
            id: getRandomInt(10000),
            username: username,
            content: content,
        }, post, username);

        window.location.reload(false, true);
    }

    async function handleDeleteAll() {
        await deleteAllCommentsByPost(post);
    }

    return (
        <div className = "createCommContainer">
            <div >
                <p>🗿 Care to comment on this? Share it with the group! 🗿</p>
                <h4>💭 Comment here...</h4>
                <textarea className = "commTextarea" onChange = {(e) => setContent(e.target.value)} />
                <Button variant="commNowButton" onClick={handleSave}>Comment Now!</Button>
            </div>
        </div>
    );
}