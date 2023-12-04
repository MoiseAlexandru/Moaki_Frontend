import "../../css/followedByMe.css";
import FollowEntry from "./FollowEntry";
import { usersData } from "../../dummydata";

export default function FollowedByMeContainer() {
    return (
        <div className = "bigContainer">
            <div className = "followedByMeContainer">
                
                <h2> Following </h2>
                <div className="followingList">
                    {usersData.map((user) => <FollowEntry user = {user} key = {user.username} />)}
                </div>
            </div>
        </div>
    );
}