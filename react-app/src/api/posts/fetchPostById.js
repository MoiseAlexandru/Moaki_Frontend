import { postList } from "../../dummydata";

export default function fetchPostById(postId) {
    const post = postList.find((post) => post.IDPost === postId);
    return post;
}