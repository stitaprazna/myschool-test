import React from "react"

import './addclass.css';
// --- This is the part to add

import { Form,Button, Navbar,Nav,NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddClass extends React.Component {
	render() {
		return (
		<div id = "chai">
			<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Class Name</Form.Label>
    <Form.Control type="Name" placeholder="Example : Nursery, Class 2" />
	<Button variant="link">Add Another Class Name</Button>{' '}
	<Button variant="dark">Save</Button>
  </Form.Group>
  
</Form>
      
</div>
		)
	}
}