import { commList } from "../../dummydata";

export default function fetchCommentById(commId) {
    const comm = commList.find((comm) => comm.IDComm === commId);
    return comm;
}