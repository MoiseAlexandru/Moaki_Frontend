

export default function FollowEntry({user}) {

    const onlineStatus = user.online === 0 ?  "offline" : "online";
    return (
        <div className = {`followEntry ${onlineStatus}`}>
            <span> <img className = "userSmallImg" src =  {user.photoname} alt = "imagine" /> </span>
            <span> {user.username} </span>
        </div>
    )
}