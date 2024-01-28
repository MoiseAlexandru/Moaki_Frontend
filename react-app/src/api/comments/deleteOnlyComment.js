import api_url from "../config";


export default async function deleteOnlyComment(commentId) {
    
    try {
        const response = await fetch(`${api_url}/comment/delete/${commentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response;
    }
    catch(err) {
        console.log(err);
        return null;
    }
}