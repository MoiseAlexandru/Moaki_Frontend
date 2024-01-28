import { useEffect, useState } from "react";
import PostList from "../posts/PostList";
import fetchPostsByLocationId from "../../api/posts/fetchPostsByLocationId";
import LocationInfo from "./LocationInfo";


export default function LocationPage({locationId}) {
    const [postList, setPostList] = useState([]);

    useEffect(function() {
        async function fetchByLocation() {
            setPostList(await fetchPostsByLocationId(locationId));
        }
        fetchByLocation();
    }, [locationId]);
    
    return (
        <>
            <LocationInfo locationId = {locationId} />
            <PostList postList = {postList} />
        </>
    );
}