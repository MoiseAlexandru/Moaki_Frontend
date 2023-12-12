import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import "../../css/feedPosts.css"
import { useEffect, useState } from 'react';
import getImageByPhotoName from '../../api/posts/getImageByPhotoName';
import { Link, useNavigate } from "react-router-dom";

export default function PostOverview({post}) {

    const [imageSrc, setImageSrc] = useState(null);
    const navigate = useNavigate();
    
    useEffect(function() {
        setImageSrc(getImageByPhotoName(post.photoName));
    }, [post])

    console.log("image src: ", imageSrc);
    return (
        <div>
            <Container className = "postContainer">
            <Row>
                <Col className = "picContainer">
                <img src = {imageSrc} alt = {post.photopath} className="postPic"/>
           </Col>
                <Col className = "postDetails">
                    <Row className = "postLocation" >📍{post.locationID}</Row>
                    <Row className = "postCreator">👤 {post.username}</Row>
                    <Row className = "postDescription">📙 {post.description}</Row>
                </Col>
            </Row>
            <Row className = "postAnalytics">
                <Col className = "postScore">⭐ {post.score} Stars</Col>
                <Col><Button variant="likePostButton">❤️ {post.likes} Likes</Button></Col>
                <Col><Button variant="viewPostButton"  onClick={() => {navigate(`/create-comment/${post.IDPost}`)}}>💬 {post.comments.length} Comments</Button></Col>
            </Row>
            </Container>
        </div>
    )
}