import { commList } from "../../dummydata";


export default function createComment(commDetails) {
    
    const comm = {...commDetails};
    commList.push(comm);
    console.log(comm);
    console.log(commList);
}