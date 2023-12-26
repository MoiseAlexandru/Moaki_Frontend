import { useEffect, useState } from "react";
import PostOverview from "./PostOverview";
import CreateComment from "../comments/CreateComment";
import fetchPostById from "../../api/posts/fetchPostById";
import CommentList from "../comments/CommentList";
import fetchCommentById from "../../api/comments/fetchCommentById";


export default function PostPage({postId}) {

    const [post, setPost] = useState(null);
    const [commentList, setCommentList] = useState([]);

    useEffect(function() {
        async function getPostData() {
            setPost(await fetchPostById(postId));
        }
        getPostData();
    }, [postId])

    useEffect(function() {
        async function getComments() {
            if(!post)
                return;
            const commList = [];
            for(let commId of post.commentIds) {
                const comment = await fetchCommentById(commId);
                if(comment)
                    commList.push(comment);
            }
            setCommentList(commList);
        }
        getComments();
    }, [post])

    if(!post)
        return <div> Loading ... </div>

    return (
        <>
            <>
                <PostOverview post = {post} isExpanded = {true}/>
                <CommentList commentList = {commentList} />
                <CreateComment post = {post} />
            </>
        </>
    );
}