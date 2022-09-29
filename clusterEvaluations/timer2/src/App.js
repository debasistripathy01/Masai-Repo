
import React from "react";
import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";
function App() {

//   const [count, setCount] = useState(0);
//   console.log(1);
//   React.useEffect(()=>{
//     console.log("inside useEl=ffect")
//   },[])
//   //No dependancy for dependency array
// console.log(2)
  return (
    <div className="App">
      <Counter />
      {/* <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button> */}
    </div>
  );
}

export default App;
