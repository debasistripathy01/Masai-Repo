
import { useState } from 'react';
import './App.css';
import { SearchBar } from "../src/Components/searchBar"
function App() {



  const [ query, setQuery ] = useState("");

  return (
    <div className="App">
      <h2>Search Bar</h2>
      <h3>Search Query: {query}</h3>
      <SearchBar />
    </div>
  );
}

export default App;
