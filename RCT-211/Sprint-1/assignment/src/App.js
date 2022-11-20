import { useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch(action.type){
    default:
      return state;
    case "email":
      return {...state, email: action.payload}
    case "password":
      return {...state, password: action.payload}
    // case "reset":
    //   return initialState
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useReducer(reducer, initialState);

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("SUbmitted data ", submittedData);
    // setSubmittedData({type: "reset"});
  }

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" onSubmit={submitHandler} >
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" value={submittedData.email} onChange={(e)=>setSubmittedData({type:"email", payload: e.target.value})}/>
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" value={submittedData.password} onChange={(e)=>setSubmittedData({type: "password", payload: e.target.value})} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      <div>
        <div data-testid="submitted-data-email">User Email:{submittedData.email}</div>
        <div data-testid="submitted-data-password">User Password:{submittedData.password}</div>
      </div>

      <div data-testid="no-details-container"></div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
