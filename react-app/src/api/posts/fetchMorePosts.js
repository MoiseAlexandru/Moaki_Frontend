import { fetchFeedPosts } from "./fetchFeedPosts";


export async function fetchMorePosts(username) {
    try {
        const responseAllPosts = await fetch('http://localhost:8080/post/generalFeed', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const allPosts = await responseAllPosts.json();
        //console.log(allPosts);
        const feedPosts = await fetchFeedPosts(username);
        //console.log(feedPosts);
        const postList = [];
        for(let i = 0; i < allPosts.length; i++) {
            let inFeed = false;
            for(let j = 0; j < feedPosts.length; j++) {
                if(allPosts[i].id === feedPosts[j].id) {
                    inFeed = true;
                    break;
                }
            }
            if(inFeed === false) {
                postList.push(allPosts[i]);
            }
        }
        return postList;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}