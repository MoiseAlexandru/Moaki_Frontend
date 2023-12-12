import { useEffect, useState } from "react";
import PostOverview from "./PostOverview";
import CreateComment from "../comments/CreateComment";
import fetchPostById from "../../api/posts/fetchPostById";


export default function PostPage({postId}) {
    const [commList, setCommList] = useState([]);

    useEffect(function() {
        setCommList(fetchPostById(postId));
    }, [postId])

    return (
        <>
            <PostOverview post = {fetchPostById(postId)} />
            {/* <PostList postList = {postList} /> */}
            <CreateComment/>
        </>
    );
}