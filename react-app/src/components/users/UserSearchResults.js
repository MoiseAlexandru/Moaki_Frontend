import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import followUser from '../../api/user/followUser';
import { useEffect, useState } from 'react';
import unfollowUser from '../../api/user/unfollowUser';
import fetchFollowingStatus from '../../api/user/fetchFollowingStatus';


export default function UserSearchResults({userObj}) {
    //console.log(userObj);

    const [isBeingFollowed, setIsBeingFollowed] = useState(false);
    const [username, setUsername] = useState("");

    const navigate = useNavigate();
    
    useEffect(function() {
        setUsername(localStorage.getItem("username"));
    }, [])

    useEffect(function() {
        async function getFollowingStatus() {
            if(username === "")
                return;
            const followingStatus = await fetchFollowingStatus(username, userObj.username);
            setIsBeingFollowed(followingStatus);
        }
        getFollowingStatus();
    }, [userObj.username, username])

    function handleUserSelect(event) {
        event.stopPropagation();
        navigate(`/profile/${userObj.username}`)
    }

    async function handleFollow(event) {
        event.stopPropagation();
        await followUser(username, userObj.username, username);
        setIsBeingFollowed(true);
    }

    async function handleUnfollow(event) {
        event.stopPropagation();
        await unfollowUser(username, userObj.username, username);
        setIsBeingFollowed(false);
    }

    return (
        <Container className="userContainer" onClick = {handleUserSelect}>
            <Row>
            <Col className="picContainer">
            {userObj.image ?
                <img src = {userObj.image} alt = {userObj.username} className="profilepic"/>
                :
                <img src = "user-default.png" alt = {userObj.username} className="profilepic" />
            }
    
            </Col>
            
            <Col className="infoContainer">
                <Row><h3 className="fullname"> {userObj.fullname} </h3></Row>
                <Row><h4 className="username"> {userObj.username} </h4></Row>
                <Row><p className="bio"> {userObj.bio} </p></Row>
                {!isBeingFollowed && <Row><Button variant="followButton" onClick = {handleFollow}>Follow me! </Button></Row> }
                {isBeingFollowed && <Row><Button variant="unfollowButton" onClick = {handleUnfollow}></Button></Row> }
            </Col>
            </Row>
        </Container>
    );
}