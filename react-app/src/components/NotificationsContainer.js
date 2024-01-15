
import "../css/notificationsContainer.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

export default function NotificationsContainer() {

    const navigate = useNavigate();
    return (
        <div className = "bigContainer">
            <div className = "notificationsContainer">
            <div> <Button variant="createPostButton" onClick={() => {navigate("/create-post")}}> Create Post </Button>
            </div>
                {/* <div className = "containerTitle"><h2> Notifications </h2></div> */}
                <div className="notificationsList">
                    <div className = "notification">
                        <div className = "notificationTitle">✈️ Ready for Takeoff!</div>
                        <div className = "notificationText">Your wanderlust crew is waiting. Check out the latest travel gems and share your own adventures. Time to soar! 🌍 #JetsetterAlert</div>
                    </div>
                    <div className = "notification">
                    <div className = "notificationTitle">🏖️ Beach vibes incoming!</div>
                    <div className = "notificationText">Your travel tribe has new updates. Dive into stunning seascapes, travel hacks, and maybe a sunset or two. Let the wave of wanderlust wash over you! 🌅 #BeachBumNotification</div>
                    </div>
                    <div className = "notification">
                    <div className = "notificationTitle">Adventure Awaits! 🌍✈️</div>
                    <div className = "notificationText">Pack your bags and share the magic! Your followers are eager to explore the world through your lens. Post your latest travel gems and inspire wanderlust in the community.</div>
                    </div>
                    <div className = "notification">
                    <div className = "notificationTitle">Jet-Setter Alert! 🚀</div>
                    <div className = "notificationText">Your latest post is taking off! Buckle up for a wave of likes, comments, and travel envy. Your followers can't wait to embark on this digital journey with you!</div>
                    </div>
                    <div className = "notification">
                    <div className = "notificationTitle">Lost & Found Connections! 🔍🤝!</div>
                    <div className = "notificationText">*Someone just stumbled upon your travel</div>
                    </div>
                </div>
            </div>
        </div>
    );
}