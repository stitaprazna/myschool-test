import React from "react"

import './addsubject.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddSubject extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Subject Name</Form.Label>
    <Form.Control type="Name" placeholder="Example : English" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Subject Code</Form.Label>
    <Form.Control type="Name" placeholder="Example : English101" />
  </Form.Group>
	<Button variant="dark">Save</Button>
  
</Form>
      
</div>
		)
	}
}