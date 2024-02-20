import React from "react";
import { Button } from "react-bootstrap";

function Display({Email,Password,setEmail,setPassword}){
    return <>
    <h1>Form Data is:</h1>
<h2>Email: {Email}</h2>
<h2>Password: {Password}</h2>
<Button variant="primary" type="submit" onClick={()=>{
    setEmail("");
    setPassword("");
}}>
        Clear
      </Button>
    </>
}

export default Display