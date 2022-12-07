
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from "../src/Components/searchBar"
import { countries } from './utils/countries';
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
      let textQuery = query.trim().toLowerCase();
      let newCountries = countries.filter((item)=>{
        return item.country.toLowerCase().indexOf(textQuery) !== -1 ? true : false
      }).map((item)=> item.country);
      setSuggestions(newCountries)
      console.log(newCountries);
    }
  },[query])
  return (
    <div className="App">
      <h2>Search Bar</h2>
      <h3>Search Query: {query}</h3>
      <SearchBar queryHandler={queryHandle}  suggestion={suggestion}/>
    </div>
  );
}

export default App;
