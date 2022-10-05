import React from "react";


export default function Contacts({users, active, onChange}){


    return (
        <div>
            {
                users.map((el)=>
                {
                    <div style={{background: active===el ? "teal" : null}}
                    key={el.id}
                    onClick={()=>onChange(el)}>{el.name}</div>
                })
            }

        </div>
    )

}