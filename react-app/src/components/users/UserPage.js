import { useEffect, useRef, useState } from "react";
import ColorThemePicker from "../ColorThemePicker";
import "../../css/findUsers.css";

import { usersData } from "../../dummydata";
import UserResult from "./UserResult.js"
import { useNavigate } from "react-router-dom";
import userFilter from "../../api/user/userFilter.js";
import Searchbar from "../Searchbar.js";

export default function UserPage() {
    
    const users = usersData;
    const numUsers = users.length;
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    console.log(query);

    function handleSearchChange(newText) {
        setQuery(newText);
    }

    function handleUserSelect(user, fromClick) {
        setQuery(user.username);

        if(fromClick === true) {
            navigate(`/user/${user.username}`)
            return;
        }
    }

    return (
        <main className = "userList">
            <h2> Search Users... </h2>
            <Searchbar onSelect = {handleUserSelect} filterFunction = {userFilter} resultEntry={UserResult}/>


            {numUsers > 0 ? (
                <>
                    <p>
                    🗿 Search, follow and connect with travelers worldwide! 🗿
                    </p>
                    
                    {/* <ul className = "users">
                        {users.map((user) => (
                            <User userObj = {user} key = {user.username} />
                        ))}
                    </ul> */}
                </>
            ): <p> There are no users yet... 😔</p>}
        </main>
    );
}



function Search({query, handleChange}) {
    /*
    const inputEl = useRef(null);

    useKey("Enter", function() {
        if(document.activeElement === inputEl.current)
            return;
        inputEl.current.focus();
        setQuery("");
    });
    */
    
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