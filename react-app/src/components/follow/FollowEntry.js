import { useNavigate } from "react-router-dom";


export default function FollowEntry({user}) {
    const navigate = useNavigate();
    const onlineStatus = user.online === 0 ?  "offline" : "online";
    return (
        <div className = {`followEntry ${onlineStatus}`} onClick = {() => navigate(`/profile/${user.username}`)}>
            <span> <img className = "userSmallImg" src =  {user.image} alt = "imagine" /> </span>
            <span> {user.username} </span>
        </div>
    )
}