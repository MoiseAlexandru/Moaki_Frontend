import "../../css/followedByMe.css";
import FollowEntry from "./FollowEntry";
import { usersData } from "../../dummydata";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

export default function FollowedByMeContainer() {
    const navigate = useNavigate();
    
    return (
        <div className = "bigContainer">
            <div className = "followedByMeContainer">
            <Button variant="searchFriendsButton" onClick={() => {navigate("/users")}}> Search Friends </Button>
                <h2> Following </h2>
                <div className="followingList">
                    {usersData.map((user) => <FollowEntry user = {user} key = {user.username} />)}
                </div>
            </div>
        </div>
    );
}