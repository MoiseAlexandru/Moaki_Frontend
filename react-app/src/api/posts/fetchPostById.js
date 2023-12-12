import { postList } from "../../dummydata";

export default function fetchPostById(postId) {
    const post = postList.filter((post) => post.IDPost === postId);
    return post;
}