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
import Form from 'react-bootstrap/Form';
import editPost from '../../api/posts/editPost';
import deletePost from '../../api/posts/deletePost';
import StarRating from '../utils/StarRating';
import { fetchLikedStatus } from '../../api/posts/fetchLikedStatus';
import unlikePost from '../../api/posts/unlikePost';
import likePost from '../../api/posts/likePost';

export default function PostOverview({post, isExpanded}) {

    //const [imageSrc, setImageSrc] = useState(null);
    const [location, setLocation] = useState(null);
    const [description, setDescription] = useState(post.description);
    const [isEditing, setIsEditing] = useState(false);
    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(0);
    const [username, setUsername] = useState("");
    const [initialLikedStatus, setInitialLikedStatus] = useState(false);

    const isHisPost = username === post.username;
    const initialRating = post.rating;
    const navigate = useNavigate();

    useEffect(function() {
        setUsername(localStorage.getItem("username"));
    }, []);
    
    useEffect(function() {
        async function fetchLocationData() {
            setLocation(await fetchLocationById(post.locationId));
        }
        fetchLocationData();
    }, [post.locationId]);

    useEffect(function() {
        async function getLikedStatus() {
            if(!username)
                return;
            const likedStatus = await fetchLikedStatus(post.id, username)
            setLiked(likedStatus);
            setInitialLikedStatus(likedStatus)
        }
        getLikedStatus();
    }, [post.id, username]);

    /*
    useEffect(function() {
        async function getLikedStatus() {
            setLiked(await fetchLikedStatus(post.id))
        }
        
    })
    */

    async function handleDelete() {
        const username = localStorage.getItem("username");
        console.log("deleting post with id", post.id);
        await deletePost(post, username);
        navigate(`/location/${post.locationId}`);
    }

    console.log(post);
    console.log(rating);
    async function handleSave() {
        await editPost(post.id, {...post, description: description, score: rating > 0 ? rating : initialRating});
        setIsEditing(false);
        window.location.reload(false);
    }

    async function handleCancel() {
        setDescription(post.description);
        setIsEditing(false);
    }

    async function handleLikeChange() {
        if(liked === true) {
            setLiked(false);
            await unlikePost(post.id, username);
        }
        else {
            setLiked(true);
            await likePost(post.id, username);
        }
    }

    function onChangeRating(newRating) {
        setRating(newRating);
    }

    return (
        <div>
            <Container className = "postContainer">
            <Row>
                <Col className = "picContainer">
                <img src = {post.image !== "null" ? post.image : "/nothing.png"} alt = {post.photopath} className="postPic"/>
           </Col>
                <Col className = "postDetails">
                    {isExpanded === false ?
                    <>
                        {location && <Row className = "postLocation" >📍{location.name} </Row>}
                        <Row className = "postCreator">👤 {post.username}</Row>
                        <Row className = "postDescription">📙 {post.description}</Row>
                    </>
                    :
                    <>
                        {isEditing === false ? 
                        <>
                            {location && <Row className = "postLocation" >📍{location.name} </Row>}
                            <Row className = "postCreator"  onClick = {() => {navigate(`/profile/${post.username}`)}}>👤 {post.username}</Row>
                            <Row className = "postDescription">📙 {post.description}</Row>
                            {isHisPost && 
                                <Row>
                                    <Button variant = "success" onClick = {() => setIsEditing(true)}> Edit </Button>
                                    <Button variant = "danger" onClick = {() => handleDelete()}> Delete </Button>
                                </Row>
                            }
                            
                        </>
                        :
                        <>
                            {location && <Row className = "postLocation" >📍{location.name} </Row>}
                            <Row className = "postCreator">👤 {post.username}</Row>
                            <Row className = "postDescription">
                                <Form.Label> Description </Form.Label>
                                <Form.Control type = "textarea" value = {description} onChange = {(e) => setDescription(e.target.value)} />
                            </Row>
                            <Row classname = "postRating">
                                <StarRating size = {40} maxRating = {5} defaultRating={initialRating} onSetRating = {onChangeRating} imageType = "post" />
                            </Row>
                            <Row>
                                <Col><Button variant = "success" onClick = {() => handleSave()}> Save </Button></Col>
                                <Col><Button variant = "danger" onClick = {() => handleCancel()}> Cancel </Button></Col>
                            </Row>
                        </>
                        } 
                    </>
                    }
                </Col>
            </Row>
            <Row className = "postAnalytics">
                <Col className = "postScore">⭐ {post.score} Stars</Col>
                <Col><Button variant="likePostButton" onClick = {handleLikeChange}>{liked ? "❤" : "🤍"} {post.numberOfLikes + liked - initialLikedStatus} Likes</Button></Col>
                <Col><Button variant="viewPostButton"  onClick={() => {navigate(`/post/${post.id}`)}}>💬 {post.commentIds ? post.commentIds.length : 0} Comments</Button></Col>
            </Row>
            </Container>
        </div>
    )
}