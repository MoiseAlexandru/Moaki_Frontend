import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import "../../css/feedPosts.css"
//import { useEffect, useState } from 'react';
//import getImageByPhotoName from '../../api/posts/getImageByPhotoName';
import { Link, useNavigate } from "react-router-dom";
import fetchLocationById from '../../api/location/fetchLocationById';
import { useEffect, useState } from 'react';

export default function PostOverview({post}) {

    //const [imageSrc, setImageSrc] = useState(null);
    const [location, setLocation] = useState(null);
    const navigate = useNavigate();

    
    useEffect(function() {
        async function fetchLocationData() {
            setLocation(await fetchLocationById(post.locationId));
        }
        fetchLocationData();
    }, [post.locationId])
    

    return (
        <div>
            <Container className = "postContainer">
            <Row>
                <Col className = "picContainer">
                <img src = {post.image} alt = {post.photopath} className="postPic"/>
           </Col>
                <Col className = "postDetails">
                    {location && <Row className = "postLocation" >📍{location.name} </Row>}
                    <Row className = "postCreator">👤 {post.username}</Row>
                    <Row className = "postDescription">📙 {post.description}</Row>
                </Col>
            </Row>
            <Row className = "postAnalytics">
                <Col className = "postScore">⭐ {post.score} Stars</Col>
                <Col><Button variant="likePostButton">❤️ {post.likes} Likes</Button></Col>
                <Col><Button variant="viewPostButton"  onClick={() => {navigate(`/post/${post.id}`)}}>💬 {post.commentIds ? post.commentIds.length : 0} Comments</Button></Col>
            </Row>
            </Container>
        </div>
    )
}