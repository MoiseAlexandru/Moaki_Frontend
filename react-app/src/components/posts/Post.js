import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import "../../css/feedPosts.css"

export default function Post({post}) {
    return (
        <div>
            <Container className = "postContainer">
            <Row>
                <Col className = "picContainer">
                <img src = {post.photopath} alt = {post.photopath} className="postPic"/>
           </Col>
                <Col className = "postDetails">
                    <Row className = "postLocation" >📍{post.locationID}</Row>
                    <Row className = "postCreator">👤 {post.username}</Row>
                    <Row className = "postDescription">📙 {post.description}</Row>
                </Col>
            </Row>
            <Row className = "postAnalytics">
                <Col className = "postScore">⭐ {post.score} Stars</Col>
                <Col className = "postLikes">❤️ {post.likes} Likes</Col>
                <Col><Button variant="viewPostButton">💬 {post.comments.length} Comments</Button></Col>
            </Row>
            </Container>
        </div>
    )
}