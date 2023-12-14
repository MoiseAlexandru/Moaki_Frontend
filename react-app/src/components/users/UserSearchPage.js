import { useEffect, useRef, useState } from "react";
import ColorThemePicker from "../ColorThemePicker.js";
import "../../css/findUsers.css";

import { usersData } from "../../dummydata.js";
import UserResult from "./UserResult.js"
import { useNavigate } from "react-router-dom";
import userFilter from "../../api/user/userFilter.js";
import Searchbar from "../Searchbar.js";
import UserSearchResults from "./UserSearchResults.js";

export default function UserPage() {
    
    const [users, setUsers] = useState([]);
    const numUsers = users.length;
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSearchChange(newText) {
        setQuery(newText);
    }

    function handleUserSelect(user) {
        setQuery(user.username);
        navigate(`/user/${user.username}`)
    }

    async function handleUserEnter(input, controller) {
        const newUserList = await userFilter(input, controller);
        setUsers(newUserList);
    }

    return (
        <main className = "userList">
            <h2> Search Users... </h2>
            <p>🗿 Search, follow and connect with travelers worldwide! 🗿</p>
            <Searchbar onSelect = {handleUserSelect} onEnter = {handleUserEnter} filterFunction = {userFilter} resultEntry={UserResult}/>

            {numUsers > 0 ? (
                <>
                    
                    
                    <ul className = "users">
                        {users.map((user) => (
                            <UserSearchResults userObj = {user} key = {user.username} />
                        ))}
                    </ul>
                </>
            ): <p> There are no users yet... 😔</p>}
        </main>
    );
}



function Search({query, handleChange}) {
    
    return (
        <input
          className="search"
          type="text"
          placeholder="Search users..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
    );
}