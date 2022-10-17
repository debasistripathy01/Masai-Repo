
import './App.css';
// import userForm from './Components/userForm';
import React, { useRef, useState } from 'react';

// const initState ={
//   name: "",
//   email: "",
//     age: "",

// }
const initState = {
  name: "",
  age: "",
  isMarried: "",
  country: "",
  gender: "",
  email: ""
};


function App() {

  // const [data, setData] = useState("");


  // const handleChange = (e) =>{
  //   const {name, value} = e.target
  //   setData({...data, [name] : value});
  // }
  const fileRef = useRef()
  // const {name, email, age} = data;
  const [form, formData] = useState(initState);
  const {name, isMarried, country, gender, email} = form;

  const handleChange =(e)=>{
    let {name, value, checked, type} = e.target
    formData(prev =>({...prev, [name]: value}));
    value = (type === "checkbox") ? checked : value;
  }

  const onSubmit =(e) =>{
    e.preventDefault();
    console.log(formData);
    console.log(fileRef.current.files[0].name)
  }

  return (
    <div className="App">
      <h1>Form: User Details</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input onChange={handleChange} type="text" name="name" value={name} />
        </label>
        <br/>
        <label>
          Email
          <input onChange={handleChange} type="email" name="email" value={email} />
        </label>
        <br/>
        <label>
          Country
          <input onChange={handleChange} type="text" name="country" value={country} />
        </label>
        <br/>
        <label>
          Married
          <input onChange={handleChange} type="checkbox" name="isMarried" value={isMarried} checked={isMarried}/>
        </label>
        <br/>
        <select onChange={handleChange} name='gender' value={gender}>
            <option value="">--Select Gender--</option>
            <option value="male">M</option>
            <option value="female">F</option>
        </select>
        <br/>
        <input type="file" ref={fileRef}/>
        <br/>
        <input type="submit"/>
      </form>
      {/* <h1>Event Form, UseRef</h1>
      <input onChange={handleChange} placeholder='Write Name' value={name} name="name" onChange={handleChange}/>
      <input onChange={handleChange} placeholder='write Email' value={email} name="email" onChange={handleChange} />
      <input onChange={handleChange} placeholder='write age' value={age} name="age" onChange={handleChange} />
      <br/>
      <button onClick={()=>{console.log(data)}}>Submit</button> */}
      {/* <userForm /> */}

    </div>
  );
}

export default App;
