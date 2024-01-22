import { useEffect, useState } from "react";
import "../../css/followedByMe.css";
import FollowEntry from "./FollowEntry";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import fetchFollowingList from "../../api/user/fetchFollowingList";
import fetchUserByUsername from "../../api/user/fetchUserByUsername";

export default function FollowedByMeContainer() {
    const [username, setUsername] = useState("")
    const [userData, setUserData] = useState([]);

    useEffect(function() {
        setUsername(localStorage.getItem("username"));
    }, [])

    useEffect(function() {
        async function getFollowingList() {
            if(!username)
                return;
            const usernamesList = await fetchFollowingList(username);

            const resultingList = []
            for(let followedUsername of usernamesList) {
                const user = await fetchUserByUsername(followedUsername);
                resultingList.push(user);
            }
            setUserData(resultingList);
        }
        getFollowingList();
    }, [username])

    const navigate = useNavigate();
    
    return (
        <div className = "bigContainer">
            <div className = "followedByMeContainer">
            <Button variant="searchFriendsButton" onClick={() => {navigate("/users")}}> Search Friends </Button>
                <h2> Following </h2>
                <div className="followingList">
                    {userData.map((user) => <FollowEntry user = {user} key = {user.username} />)}
                </div>
            </div>
        </div>
    );
}