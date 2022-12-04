// import { useState, useEffect } from "react"
import { useState } from 'react';
import './App.css';
// import { useTimeOutComp } from "./Component/TimeOutComp";
// import { useFetch } from "./Component/useFetchCustomHook";
// import { useTimeOut } from "./Hooks/useTimeOut";
// import { Todos } from "./Todos/Todos";




function App() {

  const [ count, setCount] = useState(0);



  // const { loading, data, error } = useFetch("https://reqres.in/data");
  // // if you are returning object then deStructure it here like { ready } otherwise simply write this thats it
  // const ready = useTimeOut(5000)

  const handleCount =()=>{
    setCount((prev)=> prev+1);
  }

  const handleReduce = ()=>{
    setCount ((prev)=> prev-1);
  }

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h3> The Current count is {count}</h3>
      <button className='increament' onClick={handleCount}>Add</button>
      <button className='decreament' onClick={handleReduce}>Reduce</button>
    </div>
  );
}

export default App;
