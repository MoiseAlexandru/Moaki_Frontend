import { commList } from "../../dummydata";

export default async function fetchCommentById(commId) {

    try {
        const response = await fetch(`http://localhost:8080/comment/get/${commId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }
}