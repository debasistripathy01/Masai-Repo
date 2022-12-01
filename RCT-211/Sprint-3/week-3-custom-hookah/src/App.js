import { useState, useEffect } from "react"
import './App.css';
import { useTimeOutComp } from "./Component/TimeOutComp";
import { useFetch } from "./Component/useFetchCustomHook";
import { useTimeOut } from "./Hooks/useTimeOut";
import { Todos } from "./Todos/Todos";




function App() {


  const { loading, data, error } = useFetch("https://reqres.in/data");
  // if you are returning object then deStructure it here like { ready } otherwise simply write this thats it
  const ready = useTimeOut(5000)


  return (
    <div className="App">
      
    { ready && <h1>App Component: {ready}</h1>}
    <h2>State: {ready ? "true" : "false"}</h2>
    <Todos />
    { loading && <p>{loading}</p>}
    { loading && <p>"{data}"</p>}
    { loading && <p>{error}</p>}
    </div>
  );
}

export default App;
