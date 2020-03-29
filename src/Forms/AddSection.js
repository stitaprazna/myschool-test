import React from "react"

import './addsection.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddSection extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
			<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Class</Form.Label>
    <Form.Control as="select">
      <option>Get from DB(class)</option>
      <option>Get from DB(class)</option>
      <option>Get from DB(class)</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
                
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Section Name</Form.Label>
    <Form.Control type="Name" placeholder="Example : A" />
  </Form.Group>
  
</Form>
      
</div>
		)
	}
}