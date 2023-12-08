import { useState } from "react";
import "../css/searchBar.css";

function returnEmpty() {
    return []
}

export default function Searchbar({onSelect, onEnter, filterFunction = returnEmpty, resultEntry: ResultEntry, placeholderText = "Search here..."}) {
    const [query, setQuery] = useState("");
    const results = filterFunction(query);
    //console.log(filterFunction(query));

    function handleQueryChange(newInput) {
        setQuery(newInput);
    }

    function handleKeyDown(event) {
        if(event.key === "Enter") {
            onEnter(query);
        }
    }

    function handleResultSelect(result) {
        if(result.username)
            setQuery(result.username);
        else
            setQuery(result.name);
        onSelect(result);
    }

    return (
        <div className = "containerSearchAndResults">
            <input className = "searchbar" type = "text" value = {query} placeholder = {placeholderText} onChange = {(e) => handleQueryChange(e.target.value)} onKeyDown={handleKeyDown}/>
            
            <div className="resultsBox">
                {results.map(result => (
                    <li key = {result[Object.keys(result)[0]]} onClick = {() => {handleResultSelect(result)}}>
                        <ResultEntry result = {result}  />
                    </li>
                ))}
            </div>
        </div>
    );
}