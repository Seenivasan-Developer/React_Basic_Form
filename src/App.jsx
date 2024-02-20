import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Display from './Display';

function App(){
  let [email, setEmail]=useState("");
  let [password,setPassword]=useState("");
  return <>
 <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }} placeholder="Enter email" />
         </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="Password" />
      </Form.Group>
      
      
    </Form>
    <Display Email={email} Password={password} setEmail={setEmail} setPassword={setPassword}/>
  </>
}

export default App