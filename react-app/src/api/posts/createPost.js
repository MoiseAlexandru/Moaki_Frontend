import { postList } from "../../dummydata";


export default function createPost(postDetails, photo) {

    const photoName = "photo-post-" + postDetails.IDPost;
    
    const reader = new FileReader();
        reader.addEventListener('load', () => {
            localStorage.setItem(photoName, reader.result);
        })
        if(photo)
            reader.readAsDataURL(photo);
    
    const post = {...postDetails, photoName: photoName};
    postList.push(post);
}