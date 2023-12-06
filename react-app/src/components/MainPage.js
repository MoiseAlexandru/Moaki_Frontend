import FollowedByMeContainer from "./follow/FollowedByMeContainer";
import NotificationsContainer from "./NotificationsContainer";
import NavBarContainer from "./NavBarContainer";
import "../css/mainPage.css";
import {HashRouter, Route, Routes} from "react-router-dom";
import LocationSearchPage from "./locations/LocationSearchPage";
import UserPage from "./users/UserSearchPage";

export default function MainPage() {
    return (
        <HashRouter>
            

            <div className="navBar"><NavBarContainer /></div>
            <div className = "pageContainer">
                <div className = "firstCol"> <NotificationsContainer /> </div>
                <div className = "thirdCol"> <FollowedByMeContainer /> </div>
            </div>
            
            <div className="secondCol">
                <Routes>
                    <Route exact path = "/search-location" element = {<LocationSearchPage />} />
                    <Route exact path = "/users" element = {<UserPage />} />
                </Routes>
            </div>
        </HashRouter>
    );
}