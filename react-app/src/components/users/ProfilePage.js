import { useEffect, useState } from "react"
import fetchUserByUsername from "../../api/user/fetchUserByUsername";


export default function ProfilePage({username}) {
    const [user, setUser] = useState(null);

    useEffect(function() {
        setUser(fetchUserByUsername(username))
    }, [userId]);
    
    return (
        <>
            <div className = "user-info">
                <img src = {user.photoName} alt = {`img userului ${username}`} className = "profilePic"/>
            
            </div>
        </>
    );
}