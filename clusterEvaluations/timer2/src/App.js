
import React from "react";
import Counter2 from "./components/Counter2";
// import { useState } from "react";
import ChatApp from "./components/ChatApp";
import Posts from "./components/posts";
import Counter3 from "./components/counter3"
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
      <Counter2/>
      <Counter3 />
      {/* <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button> */}
      <Posts />
      <ChatApp />
    </div>
  );
}

export default App;
