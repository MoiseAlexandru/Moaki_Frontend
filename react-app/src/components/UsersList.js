import { useEffect, useRef, useState } from "react";
import { useKey } from "./UseKey";


const usersData = [
    {
      username: "Wanderlust24",
      fullname: "Sarah Adams",
      bio: " 🌍✈️ Adventure seeker, food lover, and storyteller"
    },
    {
      username: "TechGeek87",
      fullname: "Alex Chen",
      bio: "Tech aficionado passionate about all things digital🖥️🚀"
    },
    {
      username: "FitnessFanatic22",
      fullname: "Emily Johnson",
      bio: "Fitness freak committed to a healthy lifestyle 🏋️‍♀️💪"
    },
    {
      username: "ArtsyExplorer",
      fullname: "Javier Gomez",
      bio: "🎨🎶 Join me in exploring the wonders of creativity!"
    },
    {
      username: "BookwormJane",
      fullname: "Jane Miller",
      bio: "📚🌟 Let's discuss books and share literary adventures"
    },
    {
      username: "FoodieEats",
      fullname: "Michael Nguyen",
      bio: "🍔🌮 Join me for culinary discoveries and tasty escapades!"
    },
    {
      username: "SustainableSoul",
      fullname: "Maya Patel",
      bio: "🌱♻️ Let's make a positive impact together!"
    },
    {
      username: "ComedyCentral123",
      fullname: "Sam Wilson",
      bio: "Spreading laughter one joke at a time 😂"
    },
    {
      username: "FashionistaKate",
      fullname: "Kate Thompson",
      bio: "👗👠 Let's talk fashion and express our unique styles!"
    },
    {
      username: "PetLoverXOXO",
      fullname: "Rachel Garcia",
      bio: "Animal lover, advocate for furry friends, and proud pet parent. 🐾🐶"
    }]

    

function UsersList() {
    
    const users = usersData;
    const numUsers = users.length;
    const [query, setQuery] = useState("");
    console.log(query);

    function handleSearchChange(newText) {
        setQuery(newText);
    }

    return (
        <main className = "userList">
            <h2> Search Users... </h2>
            <Search query = {query} handleChange = {handleSearchChange} />

            {numUsers > 0 ? (
                <>
                    <p>
                    🗿 Search, follow and connect with travelers worldwide! 🗿
                    </p>
                    
                    <ul className = "users">
                        {users.map((user) => (
                            <User userObj = {user} key = {user.username} />
                        ))}
                    </ul>
                </>
            ): <p> There are no users yet... 😔</p>}
        </main>
    );
}
export default UsersList;

function User({userObj}) {
    //console.log(userObj);

    return (
        <li>
            <img src = {userObj.photoName} alt = {userObj.username} />
            <div>
                <h3> {userObj.fullname} </h3>
                <h4> {userObj.username} </h4>
                <p> {userObj.bio} </p>
                <span>Follow me! </span>
            </div>
        </li>
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