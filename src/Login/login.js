import React from 'react';

import {  Link} from "react-router-dom";
import { Card , Button, Form } from 'react-bootstrap'


export default function login() {
  return (

    <div className="auth-wrapper">
    

<Card className="auth-card" >

  {/* login box */}
<div  className="loginBox">
  <h4>Log In </h4>
<Form>
  <Form.Group controlId="formBasicEmail">    
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
   
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In 
  </Button>
</Form>
</div>



{/* signup box */}


<div  className="signinBox">
  <h4>Sign Up </h4>
<Form>
  <Form.Group controlId="formBasicEmail">    
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
   
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In 
  </Button>
</Form>
</div>


<Link to='/home'>
    home
</Link>
</Card>
    </div>
  
  );
}
