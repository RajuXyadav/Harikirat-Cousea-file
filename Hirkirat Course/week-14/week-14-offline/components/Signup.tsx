"use client"

import { useState } from "react";
import axios from "axios";

export default function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex  justify-center">
        <div className="p-4 border rounded pb-4">
        <input className="p-2 m-2 text-neutral-950" type="text" placeholder="username" onChange={(e)=>{
            setEmail(e.target.value)
        }}></input>
        <br />
        <input className="p-2 m-2 text-neutral-950" type="password" placeholder="password" onChange={(e)=>{
             setPassword(e.target.value)
        }}></input>
        <br />
        <div className="p-2 m-2 flex justify-center" >
        <button onClick={()=>{
             axios.post("http://localhost:3000/api/user",{
                email,
                password
             })
        }}>Sign up</button>
        </div>
        </div>
      </div>
    </div>
  );
}
