
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from "../src/Components/searchBar"
function App() {



  const [ query, setQuery ] = useState("");
const [ suggestion, setSuggestions] = useState([]);

  const queryHandle = useCallback((val)=>{
    setQuery(val)
  },[])

  //Filter the countries ,   after the user has  the typed the text in the input Box

  useEffect(()=>{
    if(query ===""){
      setSuggestions([]);
    }
    else{
      
    }
  },[query])
  return (
    <div className="App">
      <h2>Search Bar</h2>
      <h3>Search Query: {query}</h3>
      <SearchBar queryHandler={queryHandle} />
    </div>
  );
}

export default App;
