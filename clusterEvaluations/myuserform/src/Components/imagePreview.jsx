import { useState } from "react";
import React from "react";




export default function File(){

    const [fileName, setFile] = useState();

    const handleChange = (e) =>{

        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

    }

    return (
        <div className="app">
            <h2>Add Imgae</h2>
            <input type="type" onChange={handleChange}/>
            <img src={fileName} alt="file" />
        </div>
    )
}