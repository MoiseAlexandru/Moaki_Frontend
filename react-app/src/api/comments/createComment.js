import { commList } from "../../dummydata";


export default async function createComment(commDetails, post, username) {
    
    const newCommentList = post.commentIds;
    console.log("postul aici e ", post);
    console.log("comm details id:", commDetails.id);
    newCommentList.push(commDetails.id);
    const newPost = {...post, commentIds: newCommentList};
    console.log(newPost);

    try {
        const response1 = await fetch(`http://localhost:8080/post/edit/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': post.username
            },
            body: JSON.stringify(newPost)
        });

        
        const response2 = await fetch(`http://localhost:8080/comment/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Username': username
            },
            body: JSON.stringify(commDetails)
        })
        return ;
    }
    catch(error) {
        console.log(error);
        return null;
    }



    /*
    const comm = {...commDetails};
    commList.push(comm);
    console.log(comm);
    console.log(commList);
    */
}