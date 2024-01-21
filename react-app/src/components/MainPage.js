import FollowedByMeContainer from "./follow/FollowedByMeContainer";
import NotificationsContainer from "./NotificationsContainer";
import NavBarContainer from "./NavBarContainer";
import "../css/mainPage.css";
import {HashRouter, Route, Routes, useParams} from "react-router-dom";
import LocationSearchPage from "./locations/LocationSearchPage";
import UserPage from "./users/UserSearchPage";
import LocationPage from "./locations/LocationPage";
import CreatePost from "./posts/CreatePost";
import CreateLocationPage from "./locations/CreateLocationPage";
import PostPage from "./posts/PostPage";
import FeedPage from "./FeedPage";
import MorePostsList from "./posts/MorePostsList";
import ProfilePage from "./users/ProfilePage";

function LocationPageRouting() {
    const {id} = useParams();
    console.log(id);
    return (
        <LocationPage locationId = {id} />
    )
}

function PostPageRouting() {
    const {id} = useParams();
    return (
        <PostPage postId = {id} />
    )
}

function ProfilePageRouting() {
    const {username} = useParams();
    return (
        <ProfilePage username = {username} />
    )
}

export default function MainPage({onLogout}) {
    return (
        <HashRouter>
            
            <div className="navBar"><NavBarContainer onLogout = {onLogout}/></div>
            <div className = "pageContainer">
                <div className = "firstCol"> <NotificationsContainer /> </div>
                <div className = "thirdCol"> <FollowedByMeContainer /> </div>
            </div>
            
            <div className="secondCol">
                <Routes>
                    <Route exact path = "/search-location" element = {<LocationSearchPage />} />
                    <Route exact path = "/users" element = {<UserPage />} />
                    <Route exact path = "/location/create" element = {<CreateLocationPage /> } />
                    <Route exact path = "/location/:id" element = {<LocationPageRouting />} />
                    <Route exact path = "/create-post" element = {<CreatePost />} />
                    <Route exact path = "/post/:id" element = {<PostPageRouting />} />
                    <Route exact path = "/my-feed" element = {<FeedPage />} />
                    <Route exact path = "/more-posts" element = {<MorePostsList />} />
                    <Route exact path = "/profile/:username" element = {<ProfilePageRouting />} />
                </Routes>
            </div>
        </HashRouter>
    );
}