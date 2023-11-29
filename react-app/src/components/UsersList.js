import { useEffect, useRef, useState } from "react";
import { useKey } from "./UseKey";
import Button from "react-bootstrap/Button";
import "../css/findUsers.css";
import ColorThemePicker from "./ColorThemePicker";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const usersData = [
    {
      username: "Wanderlust24",
      fullname: "Sarah Adams",
      bio: " 🌍✈️ Adventure seeker, food lover, and storyteller",
      photoname: "profilePics/Wanderlust24.jpeg"
    },
    {
      username: "TechGeek87",
      fullname: "Alex Chen",
      bio: "Tech aficionado passionate about all things digital🖥️🚀",
      photoname: "profilePics/TechGeek87.jpeg"
    },
    {
      username: "FitnessFanatic22",
      fullname: "Emily Johnson",
      bio: "Fitness freak committed to a healthy lifestyle 🏋️‍♀️💪",
      photoname: "profilePics/FitnessFanatic22.jpeg"
    },
    {
      username: "ArtsyExplorer",
      fullname: "Javier Gomez",
      bio: "🎨🎶 Join me in exploring the wonders of creativity!",
      photoname: "profilePics/ArtsyExplorer.jpeg"
    },
    {
      username: "BookwormJane",
      fullname: "Jane Miller",
      bio: "📚🌟 Let's discuss books and share literary adventures",
      photoname: "profilePics/BookwormJane.jpeg"
    },
    {
      username: "FoodieEats",
      fullname: "Michael Nguyen",
      bio: "🍔🌮 Join me for culinary discoveries and tasty escapades!",
      photoname: "profilePics/FoodieEats.jpeg"
    },
    {
      username: "SustainableSoul",
      fullname: "Maya Patel",
      bio: "🌱♻️ Let's make a positive impact together!",
      photoname: "profilePics/SustainableSoul.jpeg"
    },
    {
      username: "ComedyCentral123",
      fullname: "Sam Wilson",
      bio: "Spreading laughter one joke at a time 😂",
      photoname: "profilePics/ComedyCentral123.jpeg"
    },
    {
      username: "FashionistaKate",
      fullname: "Kate Thompson",
      bio: "👗👠 Let's talk fashion and express our unique styles!",
      photoname: "profilePics/FashionistaKate.jpeg"
    },
    {
      username: "PetLoverXOXO",
      fullname: "Rachel Garcia",
      bio: "Animal lover, advocate for furry friends, and proud pet parent. 🐾🐶",
      photoname: "profilePics/PetLoverXOXO.jpeg"
    }]

    

function UsersList() {
    
    const users = usersData;
    const numUsers = users.length;
    const [query, setQuery] = useState("");
    console.log(query);

    function handleSearchChange(newText) {
        setQuery(newText);
    }

    return (
        <main className = "userList">
            <h2> Search Users... </h2>
            <Search query = {query} handleChange = {handleSearchChange} />

            {numUsers > 0 ? (
                <>
                    <p>
                    🗿 Search, follow and connect with travelers worldwide! 🗿
                    </p>
                    
                    <ul className = "users">
                        {users.map((user) => (
                            <User userObj = {user} key = {user.username} />
                        ))}
                    </ul>
                </>
            ): <p> There are no users yet... 😔</p>}
        </main>
    );
}
export default UsersList;

function User({userObj}) {
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

function Search({query, handleChange}) {
    /*
    const inputEl = useRef(null);

    useKey("Enter", function() {
        if(document.activeElement === inputEl.current)
            return;
        inputEl.current.focus();
        setQuery("");
    });
    */
    
    return (
        <input
          className="search"
          type="text"
          placeholder="Search users..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
    );
}