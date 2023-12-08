import { useState } from "react";
import "../css/searchBar.css";

function returnEmpty() {
    return []
}

export default function Searchbar({onSelect, onEnter, filterFunction = returnEmpty, resultEntry: ResultEntry, placeholderText = "Search here..."}) {
    const [query, setQuery] = useState("");
    const results = filterFunction(query);
    const [searchbarFocus, setSearchbarFocus] = useState(false);

    console.log(query);
    
    function handleQueryChange(newInput) {
        setSearchbarFocus(true);
        setQuery(newInput);
    }

    function handleKeyDown(event) {
        if(event.key === "Enter") {
            const selectedResult = onEnter(query);
            setQuery(selectedResult);
            setSearchbarFocus(false);
        }
    }

    function handleResultSelect(result) {
        if(result.username)
            setQuery(result.username);
        else
            setQuery(result.name);
        onSelect(result);
        setSearchbarFocus(false);
    }

    return (
        <div className = "containerSearchAndResults">
            <input className = "searchbar" type = "text" value = {query} placeholder = {placeholderText} onChange = {(e) => handleQueryChange(e.target.value)} onClick = {() => {setSearchbarFocus(true)}} onKeyDown={handleKeyDown}/>
            
            {searchbarFocus && <div className="resultsBox">
                {results.map(result => (
                    <li key = {result[Object.keys(result)[0]]} onClick = {() => {handleResultSelect(result)}}>
                        <ResultEntry result = {result}  />
                    </li>
                ))}
            </div>}
        </div>
    );
}