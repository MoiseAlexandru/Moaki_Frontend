import { useEffect, useState } from "react";
import PostList from "../posts/PostList";
import fetchPostsByLocationId from "../../api/posts/fetchPostsByLocationId";
import LocationInfo from "./LocationInfo";


export default function LocationPage({locationId}) {
    const [postList, setPostList] = useState([]);

    useEffect(function() {
        setPostList(fetchPostsByLocationId(locationId));
    }, [locationId])

    return (
        <>
            <LocationInfo locationId = {locationId} />
            <PostList postList = {postList} />
        </>
    );
}