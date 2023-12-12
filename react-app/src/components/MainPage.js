import FollowedByMeContainer from "./follow/FollowedByMeContainer";
import NotificationsContainer from "./NotificationsContainer";
import NavBarContainer from "./NavBarContainer";
import "../css/mainPage.css";
import {HashRouter, Route, Routes, useParams} from "react-router-dom";
import LocationSearchPage from "./locations/LocationSearchPage";
import UserPage from "./users/UserSearchPage";
import PostPage from "./posts/PostPage";
import LocationPage from "./locations/LocationPage";
import CreatePost from "./posts/CreatePost";
import CreateComment from "./comments/CreateComment";

function LocationPageRouting() {
    const {id} = useParams();
    return (
        <div>
        {console.log("intra in return")}
        <LocationPage locationId = {Number(id)} />
        </div>
    );
}

function PostPageRouting() {
    const {id} = useParams();
    return (
        <PostPage postId = {Number(id)} />
    )
}

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
                    <Route exact path = "/location/:id" element = {<LocationPageRouting />} />
                    <Route exact path = "/create-post" element = {<CreatePost />} />
                    <Route exact path = "/create-comment/:id" element = {<PostPageRouting />} />
                </Routes>
            </div>
        </HashRouter>
    );
}