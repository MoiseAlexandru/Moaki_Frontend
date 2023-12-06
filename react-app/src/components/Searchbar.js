import { useState } from "react";
import "../css/searchBar.css";

function returnEmpty() {
    return []
}

export default function Searchbar({onSelect, onEnter, filterFunction = returnEmpty, resultEntry: ResultEntry}) {
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
        setQuery(result)
        onSelect(result);
    }

    return (
        <div className = "containerSearchAndResults">
            <input className = "searchbar" type = "text" value = {query} placeholder = "Search here... " onChange = {(e) => handleQueryChange(e.target.value)} onKeyDown={handleKeyDown}/>
            
            <div className="resultsBox">
                {results.map(result => (
                    <li key = {result.id} onClick = {() => {handleResultSelect(result)}}>
                        <ResultEntry result = {result}  />
                    </li>
                ))}
            </div>
        </div>
    );
}