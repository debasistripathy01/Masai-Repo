

import React from "react";
import { useState, useEffect } from "react";
import { users } from "../utils/chatutils";
import Contacts from "./contact";

export default function ChatApp(){

    const [messages, setMessages] = useState([]);
    const [subscribed, setSubscribe] = useState(users[0]);

    useEffect((el)=>{


        const [listen, unsubscribe] = useState(setSubscribe);
        listen((messages)=>{
            setMessages((prevMessage)=>{
                [...prevMessage, messages ]
            })
        });
        const cleanUp=()=>{
            unsubscribe();
            console.log("clean up called");

        }
        return cleanUp;
    },[subscribed])

    return (
        <div className="application">
            <h1>COntact </h1>
            <Contacts />
            

        </div>
    )
}