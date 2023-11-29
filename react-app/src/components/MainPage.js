import FollowedByMeContainer from "./FollowedByMeContainer";
import NotificationsContainer from "./NotificationsContainer";
import NavBarContainer from "./NavBarContainer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/mainPage.css";

export default function MainPage({children}) {
    return (
        <>
        <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster" />
        </head>
            <Container className = "pageContainer">
                <Row className = "navBar"><NavBarContainer /></Row>
                <Row>
                    <Col className = "firstCol"><NotificationsContainer /> </Col>
                    <Col className = "secondCol">{children}</Col>
                    <Col className = "thirdCol"> <FollowedByMeContainer /> </Col>
                </Row>
            </Container>
            
        </>
    );
}