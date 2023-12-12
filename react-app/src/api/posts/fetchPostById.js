import { postList } from "../../dummydata";

export default function fetchPostById(postId) {
    const post = postList.find((post) => post.IDPost === postId);
    console.log("postid e ", postId);
    console.log("postare returnata: ", post);
    return post;
}