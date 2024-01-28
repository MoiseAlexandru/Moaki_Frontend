import { commList } from "../../dummydata";
import api_url from "../config";

export default async function fetchCommentById(commId) {

    try {
        const response = await fetch(`${api_url}/comment/get/${commId}`, {
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