
import './App.css';
// import { useState } from 'react';
// import counter from './Components/counter';
// import Counter from './Components/counter';
// import { store } from './Redux/store';
import { useReducer } from 'react';

function App() {
  
  // const {dispatch, getState, subscribe } = store

  // const [ forceUpdate, setForceUpdate ] = useState(0)

  // const initiaHandle = 2;

  // subscribe(()=>{
  //   console.log("subscribe is Inside", store.getState());
  // })


  // const [toggle, setToggle] = useState(true);
  // const { count } = store.getState();
  const [ count , dispatch ] = useReducer((state, actionObj)=>{
    // if(actionObj.type ==='ADD'){
    //   return state+1;
    // }
    // else if(actionObj.type ==="REDUCE"){
    //   return state-1;
    // }

    switch(actionObj.type){
      case "ADD":
        // return state+1
        let newCount = actionObj.payload || 1;
        return state+newCount;
      case "REDUCE":
        return state-1;
      default:
        return state;
    } 
  },14);



  // const addHadnleChange=()=>{
  //   // setCount((prev) => prev+1 )

  //   // setForceUpdate((prev)=> prev + 1);
  //   // dispatch({ type: "ADD", payload: 2});
  // }


  // const reduceHandle =()=>{
  //   // setCount((prev) => prev-1);

  //   // dispatch({ type: "REDUCE", payload: 1})
  // }

// console.log(store.getState())

  return (


    <div className="App"> 
      
      {/* {toggle && <Counter />}
      <button onClick={()=>setToggle((prev)=> !prev)}>Toggle Counter</button> */}

      <h1>Counter : {count} </h1>
      <button onClick={()=>dispatch({type: "ADD", payload: 2})}>+</button>
      <button onClick={()=> dispatch({type:"REDUCE"})}>-</button>
    </div>
  );
}

export default App;
