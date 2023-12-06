import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";


export default function UserSearchResults({userObj}) {
    //console.log(userObj);

    return (
        <Container className="userContainer">
            <Row>
            <Col className="picContainer">
            <img src = {userObj.photoname} alt = {userObj.username} className="profilepic"/>
            </Col>
            
            <Col className="infoContainer">
                <Row><h3 className="fullname"> {userObj.fullname} </h3></Row>
                <Row><h4 className="username"> {userObj.username} </h4></Row>
                <Row><p className="bio"> {userObj.bio} </p></Row>
                <Row><Button variant="followButton">Follow me! </Button></Row>
            </Col>
            </Row>
        </Container>
    );
}