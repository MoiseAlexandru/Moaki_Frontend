
import "../css/notificationsContainer.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

export default function NotificationsContainer() {

    const navigate = useNavigate();
    return (
        <div className = "bigContainer">
            <div className = "notificationsContainer">
            <Button variant="createPostButton" onClick={() => {navigate("/create-post")}}> Create Post </Button>
                <h2> Notifications </h2>
                <div className="notificationsList">
                    <li>Notif1</li>
                    <li>Notif2</li>
                    <li>Notif3</li>
                    <li>Notif4</li>
                    <li>Notif5</li>
                </div>
            </div>
        </div>
    );
}