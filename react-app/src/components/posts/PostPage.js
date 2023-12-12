import { useEffect, useState } from "react";
import PostOverview from "./PostOverview";
import CreateComment from "../comments/CreateComment";
import fetchPostById from "../../api/posts/fetchPostById";
import CommentList from "../comments/CommentList";


export default function PostPage({postId}) {
    const [commList, setCommList] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(function() {
        setPost(fetchPostById(postId));
    }, [postId])

    console.log("Post from post page", post)

    return (
        <>
            {post &&
            <>
                <PostOverview post = {post} />
                <CommentList comments = {post} />
                <CreateComment/>
            </>
            }
        </>
    );
}