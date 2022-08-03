import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

//import "./Login.css";

export default function Login() {

const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const[value,setValue] = useState(false)
React.useEffect(()=>{
    

},[])
    function validateForm(){
        setValue(true)
    }
    function handleSubmit(){
        setValue(true)
    }

  return (

    <div className="Login">
        {!value ? 
         <div>
         <input type="text" value={email}
          onChange={(e) => setEmail(e.target.value)}
         ></input>
         <br/>
         <input type="text" value={password}
          onChange={(e) => setPassword(e.target.value)}
         ></input>
         <br/>
         <button onClick={handleSubmit}>click</button>
        </div>
     :
     <div className="content">
        <h1>nedd more time</h1>

     </div>
    
    }
       
      

    </div>

  );

}