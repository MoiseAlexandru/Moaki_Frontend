import { useEffect, useState } from "react";
import "../css/searchBar.css";

function returnEmpty() {
    return []
}

export default function Searchbar({onSelect, onEnter, filterFunction = returnEmpty, resultEntry: ResultEntry, placeholderText = "Search here..."}) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searchbarFocus, setSearchbarFocus] = useState(false);
    const controller = new AbortController();

    useEffect(function() {
        
        async function fetchData() {
            if(!query) {
                setResults([]);
                return;
            }
            const data = await filterFunction(query, controller);
            setResults(data);
        }
       
        fetchData();

        return function() {
            controller.abort();
        }
        
    }, [query])

    //console.log(query);
    
    function handleQueryChange(newInput) {
        setSearchbarFocus(true);
        setQuery(newInput);
    }

    async function handleKeyDown(event) {
        if(event.key === "Enter") {
            const selectedResult = await onEnter(query, controller);
            if(selectedResult)
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