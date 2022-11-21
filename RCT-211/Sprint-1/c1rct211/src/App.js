import { useReducer } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

export const Name = "name";

export const Gender = "gender";
export const Role = "role";
export const MaritalStatus = "maritalStatus";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

function name(value){
  return{
    type:name,
    payload: value
  }
}

function gender(value){
  return {
    type: gender,
    payload: value
  }
}

function role(value){
  return {
    type: role,
    payload: value
  }
}

function maritalStatus(value){
  return{
    type: maritalStatus,
    payload: value
  }
}


//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch(action.type){
    case "name":
      return {...state, name: action.payload}
    case "gender":
      return {...state, gender: action.payload}

    case "role":
      return {...state, role: action.payload}
    case "maritalStatus":
      return {...state, maritalStatus: action.payload}
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useReducer(reducer, initialState);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmittedData({
      // type: "name",
      name:e.target.value,
      payload:e.target.value
    });
    setSubmittedData(initialState)
  }


  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" name="name" placeholder="Name"/>
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select">
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="maritalStatus" checked={submittedData.maritalStatus} onChange={(e)=>setSubmittedData(maritalStatus(e.target.value))}/>
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        {!submittedData.name && (<div data-testid = "no-user-container">no users found</div>)}
        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
