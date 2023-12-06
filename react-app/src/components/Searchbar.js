import { useState } from "react";
import "../css/searchBar.css";

function returnEmpty() {
    return []
}

export default function Searchbar({onSelect, filterFunction = returnEmpty, resultEntry: ResultEntry}) {
    const [query, setQuery] = useState("");
    const results = filterFunction(query);
    //console.log(filterFunction(query));

    function handleQueryChange(newInput) {
        setQuery(newInput);
    }

    function handleKeyDown(event) {
        if(event.key === "Enter") {
            onSelect(query, false);
        }
    }

    function handleResultSelect(result) {
        setQuery(result)
        console.log("result:", result)
        onSelect(result, true);
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