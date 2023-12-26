import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import fetchCommentById from '../../api/comments/fetchCommentById';

export default function CommentOverview({comment}) {
    
    let commObj = comment;
    return (
        <div>
            <Container className = "commContainer">
                <Row>
                    {commObj.username}
                </Row>
                <Row>
                    {commObj.content}
                </Row>
            </Container>
        </div>
    )
}