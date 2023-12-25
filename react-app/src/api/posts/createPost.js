import { postList } from "../../dummydata";
import imageToBase64 from "../../utils/imageToBase64";


export default async function createPost(postDetails, image) {

    const imageString = await imageToBase64(image);

    const post = {...postDetails, image: imageString};
    console.log(JSON.stringify(post));
    
    try {
        const response = await fetch(`http://localhost:8080/post/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        return await response.json();
    }
    catch(error) {
        console.log(error);
        return null;
    }

}