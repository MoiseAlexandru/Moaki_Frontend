import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import fetchCommentById from '../../api/comments/fetchCommentById';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
  
import "../../css/comments.css";
import editComment from '../../api/comments/editComment';
import deleteComment from '../../api/comments/deleteComment';

export default function CommentOverview({post, comment}) {
    const [isEditing, setIsEditing] = useState(false);
    const [textComment, setTextComment] = useState(comment.content);

    async function handleEdit() {
        setIsEditing(true);
    }

    async function handleSave() {
        setIsEditing(false);
        await editComment(comment.id, {...comment, content: textComment});
        window.location.reload(false);
    }

    async function handleDelete() {
        setIsEditing(false);
        await deleteComment(post, comment.id);
        window.location.reload(false);
    }

    async function handleCancel() {
        setIsEditing(false);
        setTextComment(comment.content);
    }

    function handleCommentChange(e) {
        setTextComment(e.target.value);
    }
    
    let commObj = comment;
    return (
        <div>
            <Container className = "commContainer">
                <Row>
                    <span className = "user"> @{commObj.username}: </span>
                    <span className = "buttons">
                        {isEditing ? 
                        <>
                            <Button variant = "success" onClick = {() => handleSave()}> Save </Button>
                            <Button variant = "danger" onClick = {() => handleCancel()}> Cancel </Button>
                        </>
                        :
                        <>
                            <Button variant = "success" onClick = {() => handleEdit()}> <FontAwesomeIcon icon = {faEdit} /> </Button>
                            <Button variant = "danger" onClick = {() => handleDelete()}> <FontAwesomeIcon icon = {faTrash} /> </Button>
                        </>
                        }
                    </span>
                </Row>
                <Row>
                    <Form.Control type = "textarea" className = {isEditing ? "editingTextare" : "readonlyTextarea"} value = {textComment} readOnly = {!isEditing} placeholder="comment here" onChange = {(e) => handleCommentChange(e)} />
                </Row>
            </Container>
        </div>
    )
}