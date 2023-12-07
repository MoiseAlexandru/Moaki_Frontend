import { usersData } from "../../dummydata";


export default function fetchUserByUsername(username) {
    const user = usersData.find((user) => user.username === username);
    return user;
}