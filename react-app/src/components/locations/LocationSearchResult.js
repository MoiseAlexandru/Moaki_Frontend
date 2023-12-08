
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import "../../css/locationsSearchResults.css"
import { useNavigate } from 'react-router-dom';
export default function LocationSearchResult({location}) {
    const navigate = useNavigate();
    return (
        <Container className = "locationContainer">
        <Row className = "locationName"><h3> {location.name} </h3></Row>
        <Row>
            <Col className = "locationCity"><h4>City: {location.city}</h4></Col>
            <Col className = "locationCountry"><h4>Country: {location.country}</h4></Col>
        </Row>
        <Row>
            <Col className = "locationReviews"><h4>Reviews: {location.reviews}</h4></Col>
            <Col className = "locationRating"><h4>Rating: {location.ratings}</h4></Col>
        </Row>
        <Row><Button variant="viewLocationButton" onClick = {() => {navigate(`/location/${location.id}`)}}>See posts! </Button></Row>
        </Container>
        
    ); 
}